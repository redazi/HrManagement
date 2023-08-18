import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../jobs/jobs.service';
import { PostulationService } from './service/postulation.service';

@Component({
  selector: 'app-postulations',
  templateUrl: './postulations.component.html',
  styleUrls: ['./postulations.component.css']
})
export class PostulationsComponent {
  jobs !: any[];
  name : any;
  id  !: any;
  constructor(private postulations: PostulationService,private router: Router,private route: ActivatedRoute){
    this.name=localStorage.getItem('name');
    //localStorage.setItem('idCandidat', this.id);
  }
  ngOnInit(): void {
this.list();

  }

  private list() : void {
    console.log("postulations 1")
    console.log("postulations 1 this.name",this.name)
    console.log("postulations 1 localStorage.setItem('idCandidat')",localStorage.getItem('idCandidat'))
  this.postulations.list(localStorage.getItem('idCandidat')).subscribe(
    (response: any) => {
      // Handle the response from the server, if needed
      console.log('Response:', response);
      this.jobs = response.records;
      console.log('jobs:', this.jobs);

    //  this.router.navigate(['Jobs']);

 //this.name=localStorage.getItem('name');
    },
    (error : any) => {
      // Handle errors, if any
      console.error('Error:', error);
    }
  );

}

  


}
