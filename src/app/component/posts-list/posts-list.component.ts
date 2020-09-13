import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.readPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

}
