/**
 * 【tab页组件】
 * @param {titledata}   [必须]父组件传的tab数据
 * @event [sendtabdata] [可选]子组件传给父组件的当前选中数据
 * 
 */
Vue.component('home-title', {
    props: ['titledata'],
    data () {
        return{
            activeName: 'first',
            tabsArrData: this.titledata,
        }
    },
    created () {
        
    },
    watch: {

    },
    computed: {

    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
            this.$emit('sendtabdata',tab);
        }
    },
    template: `
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="tabItem in tabsArrData" :label="tabItem.label" :name="tabItem.name" :key="tabItem.id">{{tabItem.label}}</el-tab-pane>
        </el-tabs>
    `
})