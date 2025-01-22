class MYarray 
{
  constructor()
  {
    this.length=0;
    this.data={};
  }

  get(index)
  {
  return this.data[index];
  }
  push (item)
  {
    this.data[this.length]=item;
    this.length++;
    return this.length
  }
  pop()
  {
   const li=this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
   return console.log(li) 
  }
  delete(item)
  {
    const liitem= this.data[item];
    this.shiftItems(item);
  }

  shiftItems(item){
    for(let i=item;i<this.length-1;i++)
      {
        this.data[i]=this.data[i+1];
      }
    delete this.data[this.length-1];
    this.length--;
  }
}
const arr1=new MYarray();
arr1.push(5);
//debugger;
arr1.push(68);
arr1.push(973);
arr1.push(453);
arr1.pop()
arr1.delete(1)
console.log(arr1);