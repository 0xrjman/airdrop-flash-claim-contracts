#!make

include .env
export $(shell sed 's/=.*//' .env)

TASK_NAME                					:= show:accounts

.PHONY: submodules
submodules:
	git submodule update --init --recursive

.PHONY: init
init: submodules
	command -v rustup > /dev/null 2>&1 || bash -c "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain ${RUST_TOOLCHAIN}"
	command -v typos > /dev/null 2>&1 || bash -c "cargo install typos-cli"
	command -v forge > /dev/null 2>&1 || bash -c "curl -L https://foundry.paradigm.xyz | bash"
# [ -d lib/ds-test ] || forge install --no-commit --no-git https://github.com/dapphub/ds-test
# [ -d lib/forge-std ] || forge install --no-commit --no-git https://github.com/foundry-rs/forge-std
	npm install -g pnpm && pnpm install
	forge install

.PHONY: build
build:
	forge build

.PHONY: compile
compile:
	npx hardhat compile

.PHONY: test
test: build compile
	forge test
	npx hardhat test

.PHONY: run-task
run-task:
	npx hardhat $(TASK_NAME) $(ARG0) ${ARG1} ${ARG2} ${ARG3} --network $(NETWORK)

.PHONY: show-accounts
show-accounts:
	make TASK_NAME=show:accounts run-task

.PHONY: deploy-token
deploy-token: compile
	make TASK_NAME=deploy:token run-task

.PHONY: deploy-mystery-bean
deploy-mystery-bean: compile
	make TASK_NAME=deploy:mystery-bean run-task

.PHONY: deploy-green-bean
deploy-green-bean: compile
	make TASK_NAME=deploy:green-bean run-task

.PHONY: deploy-flash-claim
deploy-flash-claim: compile
	make TASK_NAME=deploy:flash-claim run-task

.PHONY: demo
demo: init test show-accounts deploy-token

.PHONY: hardhat
hardhat:
	npx hardhat node --hostname 0.0.0.0
