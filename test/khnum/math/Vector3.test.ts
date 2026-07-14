import {describe,it,expect} from 'vitest';
import {Vector3} from "@/khnum";
describe('Vector3',()=>{it('add',()=>{expect(new Vector3(1,2,3).add(new Vector3(2,3,4))).toEqual(new Vector3(3,5,7));});});