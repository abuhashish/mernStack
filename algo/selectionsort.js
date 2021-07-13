var arr=[1,3,2,5,4];
for (let i =0;i<arr.length-1;i++){
    min=i;
    for(var j=i+1;j<arr.length;j++){
        
        if(arr[min]>arr[j]){
            min=j;
        }
    }
  
    temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp

}
for (let i =0;i<arr.length;i++){
    console.log(arr[i]);
}
