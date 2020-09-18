import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post.model';
// import {ImageModel} from "../../model/image.model";
// import {ImageService} from "../../service/image.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public posts: Post[] = [];
  // public image: ImageModel;

  constructor(private postService: PostService,) {
  }

  ngOnInit(): void {
    this.postService.readPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    // this.imageService.ReadImage().subscribe();
  }

}
