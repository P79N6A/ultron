export interface IParams {
    region: string; // 1 机房
    pressure: { // 压力
        type: number; // 压力类型：1-固定QPS，2-固定并发，3-阶梯QPS，4-阶梯并发
        throughput?: number; // 100 // QPS
        concurrency?: number; // 100 // QPS
        duration?: number; // 1  // 持续时间
        rampup?: number; // 1  // 预热时间
        initThroughput?: number; // 100 // 初始QPS
        lastThroughput?: number; // 100 // 峰值QPS
        initConcurrency?: number | string; // 100 // 初始并发
        lastConcurrency?: number; // 100 // 峰值并发
        increasePerStep?: number; // 100 // 每步增加
        durationPerStep?: number; // 100 // 每步持续时间
        throughputs?: number[]; // 自定义并发数
        concurrencies?: number[]; // 自定义并发数
        unit?: number; // 每步持续的时间
    };
}

export interface IReturn {
    taskId: number; // 2416
    region: number; // 1
    status: number; // 10
    startAt: number; // 0
    stopAt: number; // 0
    createUser: string; // ""
    pressure: {
        type: number; // 4 // 压力类型：1-固定QPS，2-固定并发，3-阶梯QPS，4-阶梯并发
        initConcurrency: number; // 100 初始并发
        lastConcurrency: number; // 100 峰值并发
        increasePerStep: number; // 100 每步增加
        durationPerStep: number; // 100 每步持续时间
    };
}
