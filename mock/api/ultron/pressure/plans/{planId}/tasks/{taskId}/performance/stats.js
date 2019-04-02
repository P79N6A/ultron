import Mock from 'mockjs';
/**
 * 查看压测任务详情
 */
export default {
    'GET /api/ultron/pressure/plans/*/tasks/*/performance/stats':  Mock.mock ({
        "code":"0000",
        "message":"success",
        "data":{
            "type":"http",
            "data":[
                {
                    "timestamp":1542702640000,
                    "rt_max":30,
                    "rt_min":1,
                    "rt_avg":0.618,
                    "rt_99":5,
                    "rt_50":1,
                    "rt_95":1,
                    "rt_75":1,
                    "qps":951,
                    "tps":951,
                    "duration":0,
                    "requests":2854,
                    "count":2853,
                    "err_count":0,
                    "status_counts":{
                        "200":2853
                    },
                    "code_counts":{
                        "0":2853
                    },
                    "status_details":{

                    }
                },
                {
                    "timestamp":1542702650000,
                    "rt_max":27,
                    "rt_min":1,
                    "rt_avg":0.518,
                    "rt_99":1,
                    "rt_50":1,
                    "rt_95":1,
                    "rt_75":1,
                    "qps":1544,
                    "tps":1545,
                    "duration":0,
                    "requests":4633,
                    "count":4634,
                    "err_count":0,
                    "status_counts":{
                        "200":4634
                    },
                    "code_counts":{
                        "0":2853
                    },
                    "status_details":{

                    }
                }
            ],
            "total":{
                "timestamp":0,
                "rt_max":30,
                "rt_min":1,
                "rt_avg":0.556,
                "rt_99":2,
                "rt_50":1,
                "rt_95":1,
                "rt_75":1,
                "qps":1248,
                "tps":1248,
                "duration":0,
                "requests":7487,
                "count":7487,
                "err_count":0,
                "status_counts":{
                    "200":7487
                },
                "code_counts":{
                    "0":2853
                },
                "status_details":{

                }
            }
        },
        "timestamp":1530338128
    })
}