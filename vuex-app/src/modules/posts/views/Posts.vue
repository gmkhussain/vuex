<template>
    <div>
        <div>::posts::</div>
       
            <div v-for="(p, index) in postsData" :key="index">
                {{p.id}}
                {{p.title.rendered}}
            </div>
        
        
    </div>
</template>

<script>
import postServices from '../services/posts.js'
export default {
    name: 'Posts',
    data() {
        return {
            postsData: [{
                id: 0,
                title: {
                    rendered: 'amoos'
                } 
            }]
        }
    },
    methods: {
        async getPostsFunc() {
            try {
                let resp = await postServices.all()
                
                this.postData = resp.data

                console.log( "POSTS resp ->", this.postData )
            } catch ( err) {
                console.log("Err", err )
            }
        }
    },
    mounted(){
        this.getPostsFunc() 
    }
}
</script>