const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const setBinarySearch = (arr,searchItem)=>{
    let startPosition  =0;
    let lastPosition  = arr.length;
    while (startPosition <= lastPosition){

        let middleItem = Math.floor((startPosition + lastPosition) / 2);

        const currentItem  = arr[middleItem - 1]

        if(currentItem === searchItem){
           return currentItem

        }else if(currentItem > searchItem){
            lastPosition = middleItem

        }else if(currentItem < searchItem){
            startPosition = middleItem

        }else{
            return  null
        }

    }

}
console.log(setBinarySearch(arr,16)
)
