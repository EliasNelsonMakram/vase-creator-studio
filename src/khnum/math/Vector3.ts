export class Vector3 {
static readonly ZERO=new Vector3(0,0,0);
static readonly ONE=new Vector3(1,1,1);
static readonly UNIT_X=new Vector3(1,0,0);
static readonly UNIT_Y=new Vector3(0,1,0);
static readonly UNIT_Z=new Vector3(0,0,1);
constructor(public readonly x:number,public readonly y:number,public readonly z:number){}
add(v:Vector3){return new Vector3(this.x+v.x,this.y+v.y,this.z+v.z);}
subtract(v:Vector3){return new Vector3(this.x-v.x,this.y-v.y,this.z-v.z);}
multiplyScalar(s:number){return new Vector3(this.x*s,this.y*s,this.z*s);}
divideScalar(s:number){if(s===0)throw new Error('Division by zero');return new Vector3(this.x/s,this.y/s,this.z/s);}
dot(v:Vector3){return this.x*v.x+this.y*v.y+this.z*v.z;}
cross(v:Vector3){return new Vector3(this.y*v.z-this.z*v.y,this.z*v.x-this.x*v.z,this.x*v.y-this.y*v.x);}
length(){return Math.hypot(this.x,this.y,this.z);}
normalize(){const l=this.length();return l===0?Vector3.ZERO:this.divideScalar(l);}
distanceTo(v:Vector3){return this.subtract(v).length();}
lerp(v:Vector3,t:number){return new Vector3(this.x+(v.x-this.x)*t,this.y+(v.y-this.y)*t,this.z+(v.z-this.z)*t);}
equals(v:Vector3){return this.x===v.x&&this.y===v.y&&this.z===v.z;}
toArray():[number,number,number]{return [this.x,this.y,this.z];}
}
