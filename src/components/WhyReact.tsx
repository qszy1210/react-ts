import React from 'react';
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import {a} from '../promise';
export interface WhyReactProps {
}

@observer
export default class WhyReact extends React.Component<WhyReactProps, any> {

  obj1: any;
  obj2: any;

  commonChild = {name: "empty"};

  outer: any;

  inner: any;

  constructor() {
    super({});
    const ob = observable(this.commonChild);
    this.obj1 = {o: ob};
    this.obj2 = {o: ob};

    this.outer = new ProxyText();

    this.test();
  }

  test(){
      a()
  }


  render() {
    return (
      <div>
        <button onClick={this.changecommon.bind(this)}>change</button>
        <div>{this.obj1.o.name}</div>
        <div>{this.obj2.o.name}</div>
        <div>{this.outer.nameObj.name}</div>

        <button onClick={this.changeouter.bind(this)}>change outer</button>

        <div>{this.outer.flag.get()}</div>
      </div>
    );
  }

  changecommon() {
    // const common = this.obj1.o;
    // common.name += "b";
    this.obj1.o.name += "b";
  }

  changeouter() {
      this.outer.setName('qqqq')
  }

  componentWillUnmount(){
    //刷新的时候并没有调用
    debugger
  }
}

class Test {
    nameObj: any;
    flag: any = observable.box(0);
    constructor() {
        this.nameObj = observable({name: "qs"});

        autorun(()=>{
            if (this.nameObj.name) {
                this.flag.set(this.flag.get() + '0')
            }
            try{}catch(e){

            }
        })
    }
    setName(value: string) {
        this.nameObj.name = value;
    }
}

const ProxyText = new Proxy(Test, {
    construct: function(target, argumentsList, newTarget) {
        const instance = new target();;
        return new Proxy(instance, {
            get: function(target: any, prop: string, receiver){
                // debugger
                return target[prop];
            }
        })
      },

})
