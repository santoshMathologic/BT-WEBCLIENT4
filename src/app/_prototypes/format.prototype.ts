interface String {
    makeUpperCase(): string;
    endsWith(suffix: string): boolean;
    checkRoute(): string[];
}


String.prototype.makeUpperCase = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.endsWith = function (suffix: string): boolean {
    var str: string = this;
    return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
}


String.prototype.checkRoute = function (): string[] {
    var str: string;
    var strPart = [];
    str = this.split("/");
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "") {
            strPart.push(str[i]);
        }
    }
    return strPart;
}



