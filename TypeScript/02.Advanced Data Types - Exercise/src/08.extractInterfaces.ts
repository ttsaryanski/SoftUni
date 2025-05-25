type UserType = { username: string; signupDate: Date };
type TaskStatusType = "Logged" | "Started" | "InProgress" | "Done";
type TaskType = {
    status: TaskStatusType;
    title: string;
    daysRequired: number;
    assignedTo: UserType | undefined;
    changeStatus(newStatus: TaskStatusType): void;
};

function assignTask(user: UserType, task: TaskType) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}

let user = {
    username: "Margaret",
    signupDate: new Date(2022, 1, 13),
    passwordHash: "random",
};
let task1 = {
    status: <"Logged" | "Started" | "InProgress" | "Done">"Logged",
    title: "Need assistance",
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: "Logged" | "Started" | "InProgress" | "Done") {
        this.status = newStatus;
    },
};

let task2 = {
    status: <"Logged" | "Started" | "InProgress" | "Done">"Done",
    title: "Test",
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: "Logged" | "Started" | "InProgress" | "Done") {
        this.status = newStatus;
    },
    moreProps: 300,
    evenMore: "wow",
};

assignTask(user, task1);
assignTask(user, task2);
