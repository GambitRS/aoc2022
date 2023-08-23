export class Directory {
    parent;
    children;
    totalSize;
    fileSize;
    static allDirectories = [];
    constructor(parent = null) {
        this.parent = parent;
        this.children = new Map();
        this.totalSize = 0;
        this.fileSize = 0;
        Directory.allDirectories.push(this);
    }
    cd(name) {
        if (name == ".") {
            return this;
        }
        if (name == "..") {
            return this.parent;
        }
        if (this.children[name] == null) {
            this.children[name] = new Directory(this);
        }
        return this.children[name];
    }
    touch(name, size) {
        this.children[name] = new File(size, this);
        this.fileSize += size;
        var p = this;
        do {
            p.totalSize += size;
            p = p.parent;
        } while (p != null);
    }
}
class File {
    size;
    parent;
    constructor(size = 0, parent = null) {
        this.parent = parent;
        this.size = size;
    }
}
//# sourceMappingURL=directory.js.map