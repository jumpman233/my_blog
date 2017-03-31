
class Util{
	getClassStr(classArr){
		if(this.isArray(classArr)){
			return classArr.join(' ');
		} else{
			this.throwParamError();
		}
	}
	removeClass(classArr, str){
		if(this.isArray(classArr) && typeof str === 'string') {
			for(let i = 0; i < classArr.length; i++){
				if(classArr[i] !== str){
					classArr.splice(i, 1);
					return classArr;
				}
			}
			return classArr;
		} else{
			this.throwParamError();
		}
	}
	addClass(classArr, str){
		if(this.isArray(classArr) && typeof str === 'string') {
			classArr.push(str);
			return classArr;
		} else{
			this.throwParamError();
		}
	}
	haveClass(classArr, str){
		if(this.isArray(classArr) && typeof str === 'string'){
			for(let i = 0; i < classArr.length; i++){
				if(classArr === str){
					return true;
				}
			}
			return false;
		} else{
			this.throwParamError();
		}
	}
	replaceClass(classArr, oldStr, newStr) {
		if(this.isArray(classArr) && typeof oldStr === 'string' && typeof newStr === 'string'){
			for(let i = 0; i < classArr.length; i++){
				if(classArr[i] === oldStr){
					classArr[i] = newStr;
					return classArr;
				}
			}
		} else{
			this.throwParamError();
		}
	}
	isArray(classArr){
		if(typeof classArr !== 'object' || classArr === null) return false;

		return Object.prototype.toString.call(classArr).substr(8, 5) === 'Array';
	}	
	throwParamError(){
		throw Error('Util params Error!');
	}
}

export default new Util;