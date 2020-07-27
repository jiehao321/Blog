<template>
    <div class="article-content layout-content">
        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="7">
                <div class="layout-right">
                    <Recommend/>
                    <Hot style="margin-top:15px;"/>
                    <TagWall style="margin-top:15px;"/>
                    <FriendLinks style="margin-top:15px;"/>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import Recommend from "../../views/Recommend";
    import TagWall from "../../views/TagWall";
    import Hot from "../../views/Hot";
    import FriendLinks from "../../views/FriendLinks";

    export default {
        name: "AboutContent",
        components: {
            Recommend, TagWall, Hot, FriendLinks
        },
    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/theme.styl";

    .about-content {
        line-height: 25px;
        margin-bottom: 30px;
        padding: 20px;
    }

    .intro {
        float: left;
        font-size: 14px;
    }

    .intro h5 {
        width: 60%;
        font-weight: bold;
        margin-top: 10px;
        float: left;
    }

    .intro hr {
        border: 0.5px dashed #ccc;
    }

    .intro_detail div {
        margin: 10px 0;
        float: left;
        padding: 10px 20px 10px 20px;
        color: #555;
        border-left: 4px solid #0cc;
    }

    .intro_detail .wb_url {
        margin: 0 10px;
    }

    .intro_detail .wb_url a {
        color: #1CA368;
    }

    .intro span {
        color: #ff3366;
    }

    .ab_box h3 {
        margin: 10px 0 10px;
        font-size: 18px;
    }

    .ab_box p {
        color: #666;
        margin-bottom: 5px
    }

    .avatar_pic img {
        width: 100%;
        border-radius: 50%;
    }

    .ab_dubai {
        margin-bottom: 15px;
        display: inline-block;
    }

    .ly_button {
        float: right;
        width: 100px;
        background: #000;
        text-align: center;
        border-radius: 3px;
        line-height: 30px
    }

    .ly_button a {
        color: #FFF
    }

</style>
