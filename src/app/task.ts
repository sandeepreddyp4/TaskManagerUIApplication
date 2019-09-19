export interface ITask {
    task: string;
    parentTask: string;
    priority: string;
    startDate: string;  
    endDate: string;
    taskId: number;
    parentTaskId: number;
}