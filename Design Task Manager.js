class Manager {
    constructor(userId, taskId, priority) {
        this.userId = userId;
        this.taskId = taskId;
        this.priority = priority;
    }
}

class TaskManager {
    constructor(tasks) {
        this.record = new Map();
        this.pq = [];

        for (let t of tasks) {
            let m = new Manager(t[0], t[1], t[2]);
            this.pq.push(m);
            this.record.set(m.taskId, m);
        }
        this._heapify();
    }

    _heapify() {
        this.pq.sort((a, b) => {
            if (a.priority === b.priority) return b.taskId - a.taskId;
            return b.priority - a.priority;
        });
    }

    add(userId, taskId, priority) {
        let m = new Manager(userId, taskId, priority);
        this.pq.push(m);
        this.record.set(taskId, m);
        this._heapify();
    }

    edit(taskId, newPriority) {
        let old = this.record.get(taskId);
        if (!old) return;
        old.priority = newPriority;  // fix: update in place
        this._heapify();
    }

    rmv(taskId) {
        this.record.delete(taskId);  // lazy delete
    }

    execTop() {
        while (this.pq.length > 0) {
            this._heapify();
            let top = this.pq.shift();
            let latest = this.record.get(top.taskId);

            if (!latest) continue;                  // removed
            if (latest.priority !== top.priority) continue; // stale version

            this.record.delete(top.taskId);
            return top.userId;
        }
        return -1;
    }
}





let tm = new TaskManager([[1,101,8],[2,102,20],[3,103,5]]);
tm.add(4,104,5);
tm.edit(102,9);
console.log(tm.execTop()); // 2 ✅
tm.rmv(101);
tm.add(50,101,8);
console.log(tm.execTop()); // 50 ✅

