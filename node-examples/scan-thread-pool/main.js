import { Subject } from 'rxjs';
const stream$ = new Subject()

stream$.subscribe(
    {
        next:data=>{
            console.log('订阅者1',data)
        }
    }
)

stream$.subscribe(
    {
        next:data=>{
            console.log('订阅者2',data)
        }
    }
)
stream$.subscribe(
    {
        next:data=>{
            console.log('订阅者3',data)
        }
    }
)
