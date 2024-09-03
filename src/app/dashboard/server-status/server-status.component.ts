import { Component, DestroyRef, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  // host:{
  //   id:'status'
  // }
})
export class ServerStatusComponent implements OnInit{
  currentStatus = signal<'online'| 'offline' | 'unknown'>( 'offline');
  private interval!:ReturnType<typeof setInterval>;
  constructor(private DestroyRef: DestroyRef){
    // effect(()=>{
    // //listen on signal value changes
    //   console.log(this.currentStatus());
    // })
    // effect((onCleanup) => {
    //   const tasks = getTasks();
    //   const timer = setTimeout(() => {
    //     console.log(`Current number of tasks: ${tasks().length}`);
    //   }, 1000);
    //   onCleanup(() => {
    //     clearTimeout(timer);
    //   });
    // });
  }

  
  ngOnInit():void{
    const interval = setInterval(()=>{
      
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus.set('online');
      }else if(rnd < 0.9){
        this.currentStatus.set('offline');
      } else{
        this.currentStatus.set('unknown');
      }
    },1000)

    //alternative ngOnDestroy from v 16
    //class with dependency injection
    this.DestroyRef.onDestroy(()=>{
      clearInterval(interval)
    })
  }

  // ngOnDestroy(){
  //   clearInterval(this.interval)
  // }



 

}
