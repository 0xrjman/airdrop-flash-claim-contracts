import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";

// Dev AZUKI: 0xF8d582D57dB83E315cc4BB553afDD67CBfd45d7E
// Staging AZUKI: 0xD9f2065804D70f4DC65fD164457A81097C7737Ee
// Mainnet AZUKI: 0xED5AF388653567Af2F388E6224dC7C4b3241C544
export default async function deployMysteryBean(
    hre: HardhatRuntimeEnvironment
): Promise<void> {
    const [account] = await hre.ethers.getSigners();

    console.log(`Deployer address: ${await account.getAddress()}`)
    console.log(`Deploying ...`)

    const AZUKI = "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
    const MysteryBean = await hre.ethers.getContractFactory("MysteryBean");
    const mysteryBean = await MysteryBean.deploy(
        AZUKI,
        20000,
        10000,
        "0x2145a2DCbb7648B8eA65282603A0Cf22c3ED48cb"
    );
    await mysteryBean.deployed();

    console.log(`MysteryBean deployed to: ${mysteryBean.address}`);

    const canClaims = await mysteryBean.getCanClaims([1]);
    console.log(`AZUKI #[1] can claims: ${canClaims}`);

    // console.log(`Make AZUKI claimable ...`);
    // (await mysteryBean.setClaimBeanState(true)).wait();
    // console.log(`Break transfer lock ...`);
    // (await mysteryBean.breakTransferLock()).wait();

    // (await mysteryBean.setCanClaim([420, 221])).wait();
    // console.log(`AZUKI #[420, 221] can claims: ${await mysteryBean.getCanClaims([420, 221])}`);
}

// setCanClaim: 1257 tokens
const canClaimAZUKITokenIds = [
    262,
    4834,
    5203,
    5310,
    9942,
    9954,
    7666,
    3143,
    7180,
    7182,
    7183,
    9894,
    8454,
    242,
    6352,
    3305,
    1329,
    3270,
    4265,
    8386,
    3991,
    44,
    88,
    98,
    199,
    200,
    247,
    249,
    274,
    283,
    287,
    301,
    306,
    316,
    318,
    327,
    335,
    350,
    352,
    362,
    397,
    432,
    467,
    474,
    479,
    483,
    490,
    531,
    540,
    548,
    553,
    554,
    597,
    600,
    626,
    637,
    647,
    648,
    659,
    663,
    668,
    669,
    688,
    733,
    759,
    761,
    763,
    773,
    803,
    805,
    845,
    852,
    853,
    854,
    865,
    885,
    886,
    894,
    904,
    911,
    941,
    953,
    1017,
    1021,
    1033,
    1045,
    1057,
    1064,
    1076,
    1094,
    1130,
    1137,
    1141,
    1145,
    1156,
    1162,
    1167,
    1169,
    1189,
    1190,
    1197,
    1208,
    1209,
    1211,
    1213,
    1239,
    1263,
    1266,
    1274,
    1275,
    1284,
    1291,
    1304,
    1305,
    1310,
    1324,
    1337,
    1339,
    1346,
    1352,
    1353,
    1375,
    1378,
    1393,
    1394,
    1413,
    1435,
    1437,
    1470,
    1471,
    1480,
    1484,
    1495,
    1501,
    1510,
    1570,
    1704,
    1707,
    1751,
    1758,
    1763,
    1767,
    1769,
    1773,
    1815,
    1833,
    1860,
    1894,
    1898,
    1911,
    1916,
    1925,
    1930,
    1942,
    1946,
    1965,
    1987,
    2002,
    2008,
    2013,
    2050,
    2065,
    2079,
    2082,
    2095,
    2106,
    2107,
    2110,
    2116,
    2123,
    2131,
    2149,
    2159,
    2176,
    2181,
    2186,
    2211,
    2270,
    2278,
    2323,
    2356,
    2358,
    2359,
    2380,
    2382,
    2384,
    2400,
    2417,
    2430,
    2441,
    2475,
    2490,
    2527,
    2539,
    2550,
    2552,
    2567,
    2568,
    2571,
    2596,
    2599,
    2611,
    2613,
    2618,
    2623,
    2656,
    2658,
    2662,
    2669,
    2716,
    2725,
    2739,
    2743,
    2765,
    2767,
    2789,
    2809,
    2828,
    2858,
    2907,
    2929,
    2947,
    2949,
    2953,
    2961,
    2963,
    2976,
    2989,
    3015,
    3030,
    3043,
    3061,
    3084,
    3091,
    3096,
    3113,
    3130,
    3133,
    3137,
    3138,
    3147,
    3155,
    3198,
    3207,
    3223,
    3237,
    3242,
    3245,
    3251,
    3290,
    3295,
    3339,
    3345,
    3350,
    3353,
    3373,
    3386,
    3400,
    3404,
    3405,
    3413,
    3419,
    3427,
    3438,
    3474,
    3479,
    3492,
    3496,
    3501,
    3534,
    3536,
    3538,
    3548,
    3569,
    3586,
    3614,
    3616,
    3666,
    3684,
    3688,
    3699,
    3724,
    3726,
    3737,
    3740,
    3748,
    3764,
    3794,
    3812,
    3830,
    3851,
    3868,
    3873,
    3908,
    3920,
    3924,
    3953,
    3966,
    3975,
    3984,
    4003,
    4005,
    4010,
    4035,
    4071,
    4092,
    4132,
    4193,
    4196,
    4230,
    4235,
    4246,
    4247,
    4258,
    4271,
    4290,
    4311,
    4325,
    4334,
    4351,
    4355,
    4371,
    4391,
    4396,
    4400,
    4443,
    4488,
    4503,
    4519,
    4546,
    4569,
    4598,
    4625,
    4629,
    4638,
    4653,
    4670,
    4674,
    4678,
    4695,
    4696,
    4719,
    4720,
    4736,
    4752,
    4762,
    4765,
    4800,
    4801,
    4804,
    4900,
    4936,
    4939,
    4940,
    4954,
    4976,
    4977,
    4981,
    5028,
    5030,
    5046,
    5049,
    5062,
    5065,
    5083,
    5095,
    5103,
    5115,
    5127,
    5131,
    5194,
    5195,
    5217,
    5251,
    5254,
    5275,
    5279,
    5283,
    5287,
    5325,
    5353,
    5358,
    5378,
    5380,
    5428,
    5479,
    5488,
    5500,
    5509,
    5531,
    5542,
    5547,
    5559,
    5591,
    5605,
    5612,
    5625,
    5653,
    5655,
    5669,
    5670,
    5674,
    5679,
    5706,
    5710,
    5725,
    5734,
    5740,
    5747,
    5803,
    5814,
    5815,
    5821,
    5832,
    5846,
    5859,
    5920,
    5923,
    5937,
    5977,
    5990,
    6013,
    6026,
    6044,
    6063,
    6066,
    6080,
    6083,
    6094,
    6096,
    6111,
    6120,
    6179,
    6180,
    6181,
    6214,
    6255,
    6256,
    6260,
    6309,
    6331,
    6338,
    6340,
    6411,
    6434,
    6448,
    6464,
    6472,
    6500,
    6507,
    6513,
    6529,
    6541,
    6542,
    6555,
    6567,
    6594,
    6614,
    6622,
    6636,
    6637,
    6670,
    6671,
    6674,
    6703,
    6713,
    6715,
    6717,
    6727,
    6734,
    6758,
    6768,
    6784,
    6787,
    6801,
    6802,
    6816,
    6817,
    6818,
    6825,
    6841,
    6849,
    6860,
    6866,
    6876,
    6901,
    6921,
    6924,
    6945,
    6967,
    6980,
    7015,
    7019,
    7034,
    7037,
    7050,
    7055,
    7068,
    7070,
    7073,
    7083,
    7097,
    7135,
    7149,
    7167,
    7174,
    7214,
    7266,
    7281,
    7283,
    7300,
    7313,
    7325,
    7330,
    7355,
    7357,
    7358,
    7359,
    7360,
    7369,
    7379,
    7394,
    7461,
    7476,
    7482,
    7502,
    7531,
    7552,
    7561,
    7624,
    7627,
    7633,
    7646,
    7650,
    7651,
    7654,
    7660,
    7668,
    7674,
    7705,
    7708,
    7726,
    7763,
    7768,
    7773,
    7812,
    7820,
    7822,
    7835,
    7836,
    7841,
    7843,
    7845,
    7848,
    7853,
    7889,
    7894,
    7915,
    7926,
    7927,
    7944,
    7993,
    7995,
    7998,
    8033,
    8038,
    8076,
    8096,
    8123,
    8148,
    8149,
    8155,
    8162,
    8171,
    8174,
    8193,
    8199,
    8206,
    8230,
    8271,
    8284,
    8297,
    8313,
    8325,
    8355,
    8373,
    8379,
    8435,
    8481,
    8485,
    8490,
    8492,
    8500,
    8505,
    8516,
    8525,
    8539,
    8553,
    8573,
    8586,
    8590,
    8620,
    8626,
    8631,
    8641,
    8647,
    8651,
    8685,
    8722,
    8730,
    8734,
    8765,
    8766,
    8802,
    8816,
    8825,
    8845,
    8858,
    8869,
    8880,
    8881,
    8890,
    8904,
    8917,
    8922,
    8928,
    8929,
    8930,
    8941,
    8988,
    8994,
    9023,
    9051,
    9075,
    9079,
    9096,
    9118,
    9145,
    9160,
    9243,
    9246,
    9251,
    9253,
    9257,
    9261,
    9266,
    9270,
    9275,
    9282,
    9304,
    9312,
    9317,
    9330,
    9336,
    9337,
    9354,
    9367,
    9378,
    9391,
    9394,
    9412,
    9415,
    9430,
    9442,
    9483,
    9497,
    9545,
    9565,
    9575,
    9596,
    9602,
    9647,
    9648,
    9672,
    9679,
    9680,
    9697,
    9725,
    9794,
    9827,
    9830,
    9840,
    9847,
    9873,
    9924,
    9931,
    9952,
    9953,
    9974,
    9979,
    9985,
    2921,
    6975,
    9148,
    1657,
    4951,
    40,
    8716,
    2679,
    1503,
    4134,
    699,
    2508,
    2700,
    4050,
    4713,
    5330,
    6615,
    7113,
    8688,
    9297,
    9613,
    4344,
    7971,
    5714,
    567,
    7425,
    7516,
    8797,
    52,
    8419,
    315,
    870,
    1768,
    2535,
    2688,
    2985,
    3713,
    3733,
    3743,
    4782,
    5637,
    7282,
    7678,
    8768,
    8955,
    9582,
    7224,
    6639,
    415,
    6373,
    6870,
    7934,
    8732,
    9810,
    575,
    755,
    1385,
    1706,
    1808,
    4754,
    5372,
    6915,
    7602,
    7802,
    7902,
    9759,
    2544,
    7012,
    1280,
    1456,
    1583,
    1696,
    1789,
    2756,
    3282,
    3342,
    3412,
    4586,
    5177,
    6694,
    6771,
    7251,
    7644,
    7758,
    7787,
    8209,
    8993,
    308,
    5240,
    5885,
    8701,
    8830,
    9598,
    6437,
    8310,
    561,
    786,
    536,
    3259,
    4992,
    9848,
    9871,
    294,
    7175,
    1772,
    5689,
    1016,
    1314,
    1530,
    1534,
    2229,
    2594,
    4594,
    5607,
    8133,
    8600,
    8788,
    9749,
    433,
    441,
    473,
    577,
    718,
    723,
    994,
    1024,
    1098,
    1264,
    1287,
    1551,
    1676,
    1688,
    1716,
    1748,
    1762,
    1765,
    1796,
    1810,
    1899,
    1938,
    2296,
    2366,
    2637,
    3132,
    3257,
    3283,
    3349,
    3384,
    3541,
    3615,
    3787,
    4090,
    4214,
    4266,
    4392,
    4737,
    4814,
    4865,
    5094,
    5326,
    5545,
    5562,
    5835,
    6118,
    6149,
    6226,
    6344,
    6346,
    6435,
    6436,
    6468,
    6799,
    6944,
    7006,
    7014,
    7061,
    7101,
    7164,
    7273,
    7319,
    7343,
    7671,
    7918,
    8132,
    8175,
    8208,
    8361,
    8415,
    8474,
    8577,
    8673,
    8710,
    8713,
    8719,
    8741,
    8937,
    8976,
    9009,
    9029,
    9258,
    9547,
    9554,
    9560,
    9738,
    9750,
    9823,
    9895,
    9976,
    5011,
    816,
    1617,
    7370,
    9536,
    2146,
    8319,
    465,
    754,
    1018,
    1977,
    2784,
    4212,
    5306,
    7512,
    8182,
    2540,
    1697,
    235,
    359,
    363,
    395,
    417,
    423,
    515,
    520,
    551,
    607,
    664,
    675,
    797,
    814,
    868,
    881,
    908,
    965,
    1078,
    1092,
    1126,
    1143,
    1204,
    1292,
    1302,
    1323,
    1358,
    1377,
    1384,
    1388,
    1400,
    1416,
    1444,
    1487,
    1507,
    1579,
    1599,
    1612,
    1712,
    1736,
    1737,
    1795,
    1807,
    1816,
    1849,
    1852,
    1868,
    1900,
    1924,
    1972,
    2039,
    2041,
    2045,
    2051,
    2054,
    2070,
    2085,
    2086,
    2094,
    2135,
    2162,
    2171,
    2182,
    2202,
    2203,
    2212,
    2230,
    2281,
    2294,
    2303,
    2342,
    2467,
    2474,
    2478,
    2595,
    2604,
    2609,
    2624,
    2626,
    2638,
    2666,
    2682,
    2724,
    2728,
    2749,
    2758,
    2782,
    2833,
    2836,
    2872,
    3008,
    3059,
    3089,
    3125,
    3253,
    3258,
    3315,
    3366,
    3372,
    3402,
    3441,
    3509,
    3551,
    3595,
    3619,
    3640,
    3761,
    3796,
    3801,
    3833,
    3883,
    3929,
    3980,
    4027,
    4065,
    4099,
    4100,
    4129,
    4164,
    4200,
    4244,
    4249,
    4256,
    4272,
    4281,
    4301,
    4337,
    4372,
    4402,
    4437,
    4446,
    4450,
    4467,
    4492,
    4505,
    4556,
    4604,
    4626,
    4645,
    4655,
    4738,
    4873,
    4904,
    4929,
    4944,
    5026,
    5101,
    5158,
    5229,
    5249,
    5286,
    5296,
    5319,
    5357,
    5368,
    5377,
    5385,
    5402,
    5432,
    5438,
    5454,
    5458,
    5460,
    5493,
    5504,
    5524,
    5644,
    5705,
    5752,
    5761,
    5802,
    5865,
    5870,
    5877,
    5910,
    5924,
    5944,
    5949,
    5998,
    6067,
    6073,
    6093,
    6098,
    6154,
    6185,
    6190,
    6202,
    6248,
    6262,
    6264,
    6307,
    6483,
    6515,
    6538,
    6565,
    6620,
    6626,
    6701,
    6705,
    6757,
    6773,
    6789,
    6813,
    6929,
    6951,
    6959,
    6974,
    7030,
    7046,
    7064,
    7066,
    7078,
    7181,
    7200,
    7201,
    7255,
    7288,
    7311,
    7353,
    7371,
    7395,
    7420,
    7426,
    7429,
    7490,
    7499,
    7595,
    7636,
    7647,
    7681,
    7710,
    7780,
    7783,
    7784,
    7837,
    7844,
    7859,
    7924,
    7936,
    7985,
    8056,
    8078,
    8164,
    8192,
    8302,
    8375,
    8406,
    8409,
    8499,
    8534,
    8564,
    8567,
    8576,
    8579,
    8595,
    8604,
    8623,
    8655,
    8663,
    8739,
    8743,
    8755,
    8763,
    8799,
    8806,
    8862,
    8868,
    8909,
    8921,
    9020,
    9094,
    9103,
    9107,
    9125,
    9167,
    9179,
    9223,
    9273,
    9294,
    9368,
    9454,
    9458,
    9486,
    9577,
    9601,
    9690,
    9753,
    9763,
    9787,
    9835,
    9836,
    9851,
    9865,
    9869,
    9923,
    9975,
    12,
    3503,
    4236,
    5543,
    7446,
    7895,
    9183,
    7485,
    9822,
    1493,
    2502,
    2661,
    3136,
    3770,
    4155,
    4307,
    4644,
    5406,
    5684,
    6504,
    7932,
    8925,
    9533,
    102,
    9943,
    6829,
    9372,
    3542,
    3401,
    2730,
    3439,
    5840,
    6245,
    6828,
    7334,
    8645,
    296,
    466,
    5337,
    6370,
    6624,
    6673,
    1614,
    514,
]