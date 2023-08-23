export class Directory {

    public parent : Directory;
    public children : Map<String, Directory | File>;
    public totalSize : number;
    public fileSize : number;
    static allDirectories : Directory[] = [];

    constructor(parent : Directory = null) {
        this.parent = parent;
        this.children = new Map();
        this.totalSize = 0;
        this.fileSize = 0;
        Directory.allDirectories.push(this);
    }

    cd(name : string) {

        if(name == ".") {
            return this;
        }

        if(name == "..") {
            return this.parent;
        }

        if(this.children[name] == null) {
            this.children[name] = new Directory(this);
        }

        return this.children[name];
    }

    touch(name : string, size : number) {
        this.children[name] = new File(size, this);
        this.fileSize += size;
        var p : Directory = this;
        do {
            p.totalSize += size;
            p = p.parent;
        } while( p != null );
    }

}

class File {

    size : number;
    parent : Directory;

    constructor(size : number = 0, parent : Directory = null) {
        this.parent = parent;
        this.size = size;
    }
}
