import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost} from '../../../interfaces';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  post: IPost;
  constructor(private route: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(() => {
      this.post = this.route.getCurrentNavigation().extras.state as IPost
    });
  }

  ngOnInit(): void {
  }

}
