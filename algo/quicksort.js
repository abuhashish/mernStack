let arr=[1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ] 
quicksort(arr,i,j){
    pivot=arr[int(arr.length/2)]
    while(i!=j){
        if(arr[i]<pivot)
        i++;
        if(arr[j]>pivot)
        j--;
        if(arr[i]>pivot && arr[j]<pivot){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=arr[i];
        }
    }
    quicksort(arr,i,j);
    quicksort(arr,ia    qwgfdhje,j);
}



quicksort(arr,arr.length-1,0)
r23]