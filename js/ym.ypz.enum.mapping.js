var Alignment = {
    Left: 0,
    Center: 1,
    Right: 2,
    name: {
        Left: "Left",
        Center: "Center",
        Right: "Right"
    },
    message: {
        Left: "左对齐",
        Center: "中对齐",
        Right: "右对齐"
    }
};
var CacheEngine = {
    HTTPCache: 0,
    MemoryCache: 1,
    RedisCache: 2,
    name: {
        HTTPCache: "HTTPCache",
        MemoryCache: "MemoryCache",
        RedisCache: "RedisCache"
    },
    message: {
        HTTPCache: "HTTPCache",
        MemoryCache: "MemoryCache",
        RedisCache: "RedisCache"
    }
};
var ChartType = {
    Spline: 0,
    Column: 1,
    Pie: 2,
    Area: 3,
    name: {
        Spline: "Spline",
        Column: "Column",
        Pie: "Pie",
        Area: "Area"
    },
    message: {
        Spline: "曲线图",
        Column: "柱形图",
        Pie: "饼图",
        Area: "面积图"
    }
};
var RedisCacheMethod = {
    Value: 1,
    List: 2,
    Set: 4,
    SortedSet: 8,
    name: {
        Value: "Value",
        List: "List",
        Set: "Set",
        SortedSet: "SortedSet"
    },
    message: {
        Value: "Value",
        List: "List",
        Set: "Set",
        SortedSet: "SortedSet"
    }
};
var SystemEnvironment = {
    DEV: 0,
    SIT: 1,
    UAT: 2,
    PRO: 3,
    name: {
        DEV: "DEV",
        SIT: "SIT",
        UAT: "UAT",
        PRO: "PRO"
    },
    message: {
        DEV: "DEV",
        SIT: "SIT",
        UAT: "UAT",
        PRO: "PRO"
    }
};
var Terminal = {
    iOS: 0,
    Android: 1,
    H5: 2,
    name: {
        iOS: "iOS",
        Android: "Android",
        H5: "H5"
    },
    message: {
        iOS: "iOS",
        Android: "Android",
        H5: "H5"
    }
};
var CreditChannel = {
    ZhongZhiCheng: 1,
    name: {
        ZhongZhiCheng: "ZhongZhiCheng"
    },
    message: {
        ZhongZhiCheng: "中智诚征信"
    }
};
var DisabledReason = {
    ViolateRegulation: 0,
    name: {
        ViolateRegulation: "ViolateRegulation"
    },
    message: {
        ViolateRegulation: "违反平台规定"
    }
};
var FeedbackType = {
    Bug: 0,
    Question: 1,
    Suggestion: 2,
    Inform: 3,
    Appeal: 4,
    name: {
        Bug: "Bug",
        Question: "Question",
        Suggestion: "Suggestion",
        Inform: "Inform",
        Appeal: "Appeal"
    },
    message: {
        Bug: "Bug反馈",
        Question: "使用疑问",
        Suggestion: "平台建议",
        Inform: "举报",
        Appeal: "封号申诉"
    }
};
var FrozenReason = {
    Abnormal: 0,
    CanNotContactCreditor: 1,
    CreatedButNotLoan: 2,
    RepaidButNotDestroy: 3,
    name: {
        Abnormal: "Abnormal",
        CanNotContactCreditor: "CanNotContactCreditor",
        CreatedButNotLoan: "CreatedButNotLoan",
        RepaidButNotDestroy: "RepaidButNotDestroy"
    },
    message: {
        Abnormal: "被投诉异常",
        CanNotContactCreditor: "无法联系出借人",
        CreatedButNotLoan: "已打凭证，出借人未放款",
        RepaidButNotDestroy: "已还款，出借人未撕毁"
    }
};
var IOUListSorted = {
    RepaymentDateAES: 0,
    RepaymentDateDESC: 1,
    AmountAES: 10,
    AmountDESC: 11,
    name: {
        RepaymentDateAES: "RepaymentDateAES",
        RepaymentDateDESC: "RepaymentDateDESC",
        AmountAES: "AmountAES",
        AmountDESC: "AmountDESC"
    },
    message: {
        RepaymentDateAES: "还款日期从早到晚",
        RepaymentDateDESC: "还款日期从晚到早",
        AmountAES: "借款金额从小到大",
        AmountDESC: "借款金额从大到小"
    }
};
var LoanAnnualInterestRate = {
    Zero: 0,
    One: 1,
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9,
    Ten: 10,
    Eleven: 11,
    Twelve: 12,
    Thirteen: 13,
    Fourteen: 14,
    Fifteen: 15,
    Sixteen: 16,
    Seventeen: 17,
    Eighteen: 18,
    Nineteen: 19,
    Twenty: 20,
    TwentyOne: 21,
    TwentyTwo: 22,
    TwentyThree: 23,
    TwentyFour: 24,
    name: {
        Zero: "Zero",
        One: "One",
        Two: "Two",
        Three: "Three",
        Four: "Four",
        Five: "Five",
        Six: "Six",
        Seven: "Seven",
        Eight: "Eight",
        Nine: "Nine",
        Ten: "Ten",
        Eleven: "Eleven",
        Twelve: "Twelve",
        Thirteen: "Thirteen",
        Fourteen: "Fourteen",
        Fifteen: "Fifteen",
        Sixteen: "Sixteen",
        Seventeen: "Seventeen",
        Eighteen: "Eighteen",
        Nineteen: "Nineteen",
        Twenty: "Twenty",
        TwentyOne: "TwentyOne",
        TwentyTwo: "TwentyTwo",
        TwentyThree: "TwentyThree",
        TwentyFour: "TwentyFour"
    },
    message: {
        Zero: "0%",
        One: "1%",
        Two: "2%",
        Three: "3%",
        Four: "4%",
        Five: "5%",
        Six: "6%",
        Seven: "7%",
        Eight: "8%",
        Nine: "9%",
        Ten: "10%",
        Eleven: "11%",
        Twelve: "12%",
        Thirteen: "13%",
        Fourteen: "14%",
        Fifteen: "15%",
        Sixteen: "16%",
        Seventeen: "17%",
        Eighteen: "18%",
        Nineteen: "19%",
        Twenty: "20%",
        TwentyOne: "21%",
        TwentyTwo: "22%",
        TwentyThree: "23%",
        TwentyFour: "24%"
    }
};
var LoanUse = {
    Turnover: 0,
    Consumption: 1,
    MedicalCare: 2,
    Rental: 3,
    Tourism: 4,
    BuyCellPhone: 5,
    Entrepreneurship: 6,
    Decoration: 7,
    Education: 8,
    name: {
        Turnover: "Turnover",
        Consumption: "Consumption",
        MedicalCare: "MedicalCare",
        Rental: "Rental",
        Tourism: "Tourism",
        BuyCellPhone: "BuyCellPhone",
        Entrepreneurship: "Entrepreneurship",
        Decoration: "Decoration",
        Education: "Education"
    },
    message: {
        Turnover: "周转",
        Consumption: "日常消费",
        MedicalCare: "医疗",
        Rental: "租房",
        Tourism: "旅游",
        BuyCellPhone: "买手机",
        Entrepreneurship: "创业",
        Decoration: "装修",
        Education: "教育"
    }
};
var LogSmsStatus = {
    Failure: -1,
    Success: 1,
    name: {
        Failure: "Failure",
        Success: "Success"
    },
    message: {
        Failure: "发送失败",
        Success: "发送成功"
    }
};
var PaymentChannel = {
    Balance: 0,
    Alipay: 10,
    AlipayNonPassword: 11,
    AlipayWap: 12,
    AlipayAPP: 13,
    Wxpay: 20,
    WxpayPasswordFree: 21,
    WxpayWap: 22,
    WxpayAPP: 23,
    ABOC: 100,
    BC: 101,
    BHB: 102,
    BJB: 103,
    BOCM: 104,
    BRCB: 105,
    CCB: 106,
    CCIB: 107,
    CDB: 108,
    CEB: 109,
    CIB: 110,
    CMB: 111,
    CMBC: 112,
    CPSB: 113,
    GDB: 114,
    HB: 115,
    HKB: 116,
    HZB: 117,
    ICBC: 118,
    JHB: 119,
    NBB: 120,
    NJB: 121,
    PAB: 122,
    PB: 123,
    QDB: 124,
    SHB: 125,
    SPDB: 126,
    SRCB: 127,
    WZB: 128,
    name: {
        Balance: "Balance",
        Alipay: "Alipay",
        AlipayNonPassword: "AlipayNonPassword",
        AlipayWap: "AlipayWap",
        AlipayAPP: "AlipayAPP",
        Wxpay: "Wxpay",
        WxpayPasswordFree: "WxpayPasswordFree",
        WxpayWap: "WxpayWap",
        WxpayAPP: "WxpayAPP",
        ABOC: "ABOC",
        BC: "BC",
        BHB: "BHB",
        BJB: "BJB",
        BOCM: "BOCM",
        BRCB: "BRCB",
        CCB: "CCB",
        CCIB: "CCIB",
        CDB: "CDB",
        CEB: "CEB",
        CIB: "CIB",
        CMB: "CMB",
        CMBC: "CMBC",
        CPSB: "CPSB",
        GDB: "GDB",
        HB: "HB",
        HKB: "HKB",
        HZB: "HZB",
        ICBC: "ICBC",
        JHB: "JHB",
        NBB: "NBB",
        NJB: "NJB",
        PAB: "PAB",
        PB: "PB",
        QDB: "QDB",
        SHB: "SHB",
        SPDB: "SPDB",
        SRCB: "SRCB",
        WZB: "WZB"
    },
    message: {
        Balance: "余额支付",
        Alipay: "支付宝支付",
        AlipayNonPassword: "支付宝免密支付",
        AlipayWap: "支付宝wap支付",
        AlipayAPP: "支付宝APP支付",
        Wxpay: "微信支付",
        WxpayPasswordFree: "微信免密支付",
        WxpayWap: "微信wap支付",
        WxpayAPP: "微信APP支付",
        ABOC: "中国农业银行",
        BC: "中国银行",
        BHB: "渤海银行",
        BJB: "北京银行",
        BOCM: "交通银行",
        BRCB: "北京农商银行",
        CCB: "中国建设银行",
        CCIB: "中信银行",
        CDB: "成都银行",
        CEB: "中国光大银行",
        CIB: "兴业银行",
        CMB: "招商银行",
        CMBC: "中国民生银行",
        CPSB: "中国邮政储蓄银行",
        GDB: "广发银行",
        HB: "华夏银行",
        HKB: "汉口银行",
        HZB: "杭州银行",
        ICBC: "中国工商银行",
        JHB: "金华银行",
        NBB: "宁波银行",
        NJB: "南京银行",
        PAB: "平安银行",
        PB: "恒丰银行",
        QDB: "青岛银行",
        SHB: "上海银行",
        SPDB: "上海浦东发展银行",
        SRCB: "上海农村商业银行",
        WZB: "温州银行"
    }
};
var RoleCode = {
    ChanPinZhuLi_157DA3C48DBEAE39: 0,
    GeRenXinXi_0F283DDD9F12BA75: 1,
    GuanLiYuan_D8A4B9DEE8AA8FD8: 2,
    KeFuZhuanYuan_04C18B11232DFF8A: 3,
    XiTongGuanLiYuan_173CD1D08E15F40C: 4,
    name: {
        ChanPinZhuLi_157DA3C48DBEAE39: "ChanPinZhuLi_157DA3C48DBEAE39",
        GeRenXinXi_0F283DDD9F12BA75: "GeRenXinXi_0F283DDD9F12BA75",
        GuanLiYuan_D8A4B9DEE8AA8FD8: "GuanLiYuan_D8A4B9DEE8AA8FD8",
        KeFuZhuanYuan_04C18B11232DFF8A: "KeFuZhuanYuan_04C18B11232DFF8A",
        XiTongGuanLiYuan_173CD1D08E15F40C: "XiTongGuanLiYuan_173CD1D08E15F40C"
    },
    message: {
        ChanPinZhuLi_157DA3C48DBEAE39: "产品助理",
        GeRenXinXi_0F283DDD9F12BA75: "个人信息",
        GuanLiYuan_D8A4B9DEE8AA8FD8: "管理员",
        KeFuZhuanYuan_04C18B11232DFF8A: "客服专员",
        XiTongGuanLiYuan_173CD1D08E15F40C: "系统管理员"
    }
};
var ScanQRCodeResult = {
    None: 0,
    IOUId: 10,
    name: {
        None: "None",
        IOUId: "IOUId"
    },
    message: {
        None: "不处理",
        IOUId: "借条Id"
    }
};
var SignTerminal = {
    iOS: 0,
    Android: 1,
    H5: 2,
    API: 3,
    name: {
        iOS: "iOS",
        Android: "Android",
        H5: "H5",
        API: "API"
    },
    message: {
        iOS: "iOS",
        Android: "Android",
        H5: "H5",
        API: "API"
    }
};
var SignValidateType = {
    Password: 0,
    name: {
        Password: "Password"
    },
    message: {
        Password: "密码验证"
    }
};
var SMSChannel = {
    ChuangLan: 0,
    name: {
        ChuangLan: "ChuangLan"
    },
    message: {
        ChuangLan: "创蓝"
    }
};
var SMSType = {
    CaptchaCode: 0,
    RepaymentMessage: 1,
    name: {
        CaptchaCode: "CaptchaCode",
        RepaymentMessage: "RepaymentMessage"
    },
    message: {
        CaptchaCode: "验证码",
        RepaymentMessage: "还款提醒"
    }
};
var SysAttachmentType = {
    File: 0,
    Image: 10,
    Audio: 20,
    Video: 30,
    name: {
        File: "File",
        Image: "Image",
        Audio: "Audio",
        Video: "Video"
    },
    message: {
        File: "文件",
        Image: "图片",
        Audio: "音频",
        Video: "视频"
    }
};
var SysCountryContinentCode = {
    AS: 0,
    EU: 1,
    AM: 2,
    OA: 3,
    AF: 4,
    OT: 5,
    name: {
        AS: "AS",
        EU: "EU",
        AM: "AM",
        OA: "OA",
        AF: "AF",
        OT: "OT"
    },
    message: {
        AS: "亚洲",
        EU: "欧洲",
        AM: "美洲",
        OA: "大洋洲",
        AF: "非洲",
        OT: "其他"
    }
};
var SysPrivilegeStatus = {
    Disabled: -1,
    Enabled: 1,
    name: {
        Disabled: "Disabled",
        Enabled: "Enabled"
    },
    message: {
        Disabled: "已禁用",
        Enabled: "已启用"
    }
};
var SysRoleStatus = {
    Disabled: -1,
    Enabled: 1,
    name: {
        Disabled: "Disabled",
        Enabled: "Enabled"
    },
    message: {
        Disabled: "已禁用",
        Enabled: "已启用"
    }
};
var SystemName = {
    Web: 0,
    Task: 1,
    name: {
        Web: "Web",
        Task: "Task"
    },
    message: {
        Web: "Web系统",
        Task: "任务系统"
    }
};
var SysUserStatus = {
    Disabled: -1,
    Inactived: 0,
    Enabled: 1,
    name: {
        Disabled: "Disabled",
        Inactived: "Inactived",
        Enabled: "Enabled"
    },
    message: {
        Disabled: "已禁用",
        Inactived: "未激活",
        Enabled: "已启用"
    }
};
var TPPaymentChannel = {
    ZJ: 0,
    HFB: 1,
    BFB: 2,
    name: {
        ZJ: "ZJ",
        HFB: "HFB",
        BFB: "BFB"
    },
    message: {
        ZJ: "自家",
        HFB: "汇付宝",
        BFB: "贝付宝"
    }
};
var UserSex = {
    Unknown: 0,
    Male: 1,
    Female: 2,
    name: {
        Unknown: "Unknown",
        Male: "Male",
        Female: "Female"
    },
    message: {
        Unknown: "未知",
        Male: "男",
        Female: "女"
    }
};
var UserType = {
    SystemUser: 0,
    MerchantUser: 1,
    Terminal: 100,
    name: {
        SystemUser: "SystemUser",
        MerchantUser: "MerchantUser",
        Terminal: "Terminal"
    },
    message: {
        SystemUser: "系统用户",
        MerchantUser: "商家用户",
        Terminal: "终端"
    }
};
var YcCustomerFeedbackStatus = {
    Pending: 0,
    Processed: 1,
    name: {
        Pending: "Pending",
        Processed: "Processed"
    },
    message: {
        Pending: "待处理",
        Processed: "已处理"
    }
};
var YcCustomerStatus = {
    Disabled: -1,
    Enabled: 1,
    name: {
        Disabled: "Disabled",
        Enabled: "Enabled"
    },
    message: {
        Disabled: "已禁用",
        Enabled: "已启用"
    }
};
var YcIpConfigType = {
    Whitelist: 0,
    Blacklist: 1,
    name: {
        Whitelist: "Whitelist",
        Blacklist: "Blacklist"
    },
    message: {
        Whitelist: "白名单",
        Blacklist: "黑名单"
    }
};
var YcLoanIouCreditIssueStatus = {
    Pending: 0,
    Issued: 1,
    Skipped: 2,
    name: {
        Pending: "Pending",
        Issued: "Issued",
        Skipped: "Skipped"
    },
    message: {
        Pending: "待上报",
        Issued: "已上报",
        Skipped: "无需上报"
    }
};
var YcLoanIouCreditTrackStatus = {
    Pending: 0,
    Tracked: 1,
    Skipped: 2,
    name: {
        Pending: "Pending",
        Tracked: "Tracked",
        Skipped: "Skipped"
    },
    message: {
        Pending: "待更新",
        Tracked: "已更新",
        Skipped: "无需更新"
    }
};
var YcLoanIouExtenStatus = {
    Rejected: -10,
    Cancelled: -1,
    Pending: 0,
    Effecting: 10,
    name: {
        Rejected: "Rejected",
        Cancelled: "Cancelled",
        Pending: "Pending",
        Effecting: "Effecting"
    },
    message: {
        Rejected: "已拒绝",
        Cancelled: "已取消",
        Pending: "待确认",
        Effecting: "已生效"
    }
};
var YcLoanIouStatus = {
    Invalid: -20,
    Rejected: -10,
    Deleted: -1,
    Pending: 0,
    Effecting: 10,
    Frozen: 11,
    Destroyed: 20,
    name: {
        Invalid: "Invalid",
        Rejected: "Rejected",
        Deleted: "Deleted",
        Pending: "Pending",
        Effecting: "Effecting",
        Frozen: "Frozen",
        Destroyed: "Destroyed"
    },
    message: {
        Invalid: "无效的",
        Rejected: "已拒绝",
        Deleted: "已删除",
        Pending: "待确认",
        Effecting: "已生效",
        Frozen: "已冻结",
        Destroyed: "已撕毁"
    }
};
var YcLoanIouTrackType = {
    IOU: 0,
    Exten: 1,
    name: {
        IOU: "IOU",
        Exten: "Exten"
    },
    message: {
        IOU: "借条",
        Exten: "展期"
    }
};
var YcLoanSignatureContractType = {
    Intermedia: 0,
    IOU: 1,
    Exten: 2,
    name: {
        Intermedia: "Intermedia",
        IOU: "IOU",
        Exten: "Exten"
    },
    message: {
        Intermedia: "居间服务协议",
        IOU: "借款协议",
        Exten: "展期协议"
    }
};
var YcLoanSignatureStatus = {
    Canceled: -10,
    Deleted: -1,
    Pending: 0,
    WaitForSync: 1,
    Synchronizing: 2,
    Synchronized: 10,
    name: {
        Canceled: "Canceled",
        Deleted: "Deleted",
        Pending: "Pending",
        WaitForSync: "WaitForSync",
        Synchronizing: "Synchronizing",
        Synchronized: "Synchronized"
    },
    message: {
        Canceled: "已取消",
        Deleted: "已删除",
        Pending: "待处理",
        WaitForSync: "待同步",
        Synchronizing: "同步中",
        Synchronized: "已同步"
    }
};
var YcSystemNotificationKind = {
    Content: 0,
    ExternalUrl: 1,
    name: {
        Content: "Content",
        ExternalUrl: "ExternalUrl"
    },
    message: {
        Content: "内容通知",
        ExternalUrl: "外部链接通知"
    }
};
var YcSystemNotificationStatus = {
    Deleted: -1,
    Pending: 0,
    Published: 1,
    name: {
        Deleted: "Deleted",
        Pending: "Pending",
        Published: "Published"
    },
    message: {
        Deleted: "已删除",
        Pending: "草稿",
        Published: "已发布"
    }
};
var CheckPasswordTpisType = {
    CreateIOU: 0,
    DeleteIOU: 1,
    EffectIOU: 2,
    DestroyIOU: 3,
    CreateIOUExten: 4,
    CancelIOUExten: 5,
    RejectIOUExten: 6,
    EffectIOUExten: 7,
    name: {
        CreateIOU: "CreateIOU",
        DeleteIOU: "DeleteIOU",
        EffectIOU: "EffectIOU",
        DestroyIOU: "DestroyIOU",
        CreateIOUExten: "CreateIOUExten",
        CancelIOUExten: "CancelIOUExten",
        RejectIOUExten: "RejectIOUExten",
        EffectIOUExten: "EffectIOUExten"
    },
    message: {
        CreateIOU: "创建凭证",
        DeleteIOU: "删除凭证",
        EffectIOU: "确认凭证",
        DestroyIOU: "撕毁凭证",
        CreateIOUExten: "创建凭证展期",
        CancelIOUExten: "取消凭证展期",
        RejectIOUExten: "拒绝凭证展期",
        EffectIOUExten: "确认凭证展期"
    }
};