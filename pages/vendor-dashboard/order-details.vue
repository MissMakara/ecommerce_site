<template>
    <div>
        <!-- Banner Area -->
        <!-- <section id="common_banner_one">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="common_banner_text">
                            <h2>{{this.title}}</h2>
                            <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!-- My Account-Area -->
        <section id="vendor_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3">
                        <!-- Nav tabs -->
                        <div class="dashboard_tab_button">
                            <b-navbar-nav>
                                <b-nav-item to="/vendor-dashboard/"><i class="fas fa-tachometer-alt"></i>Dashboard</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/product"><i class="fas fa-shopping-cart"></i>Product</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/order"><i class="fas fa-shopping-bag"></i>Order</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/profile"><i class="far fa-id-badge"></i>Profile</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/order-details"><i class="fas fa-shopping-bag"></i>Order Details</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/add-product"><i class="fas fa-cart-plus"></i>Add Product</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/setting"><i class="fas fa-user-cog"></i>Setting</b-nav-item>
                            </b-navbar-nav>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                        <div class="dashboard_content">
                            <div id="all_order">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="vendor_order_boxed">
                                            <h4>Order Details</h4>
                                            <div class="table-responsive">
                                                <table class="table pending_table">               
                                                    <tbody v-for="orders in this.orderdetails" :key="orders.id">
                                                        <td class="thead-light">
                                                        
                                                        <tr scope="col"><th>Order Number </th></tr>
                                                        <!-- <th scope="col">Product ID</th> -->
                                                        <!-- <th scope="col">Quantity</th> -->
                                                        <tr scope="col"><th>Destination</th></tr>
                                                        <tr scope="col"><th>Status</th></tr>
                                                        <tr scope="col"><th>Amount</th></tr>
                                                        
                                                        </td>
                                                       
                                                        <!-- <td v-for="item in orders" :key="item.id">
                                                             {{ item}} -->
<!-- 
                                                            <tr scope="col">{{ item.order_id }}</tr>
                                                            <td>{{ item.product_id }}</td> -->
                                                            <!-- <td>{{ item.product_quantity }}</td> 
                                                            <tr scope="col">{{ item.destination_details + " " + item.destination_name }}</tr>
                                                            <tr scope="col">{{ item.status }}</tr>
                                                            <tr scope="col">{{ item.total }}</tr>
                                                        
                                                        
                                                       </td> -->
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!-- <div class="btn_right_table">
                                                <nuxt-link to="/vendor-dashboard/add-product" class="theme-btn-one bg-black btn_sm">Add Product</nuxt-link>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'VendorDashboard',
    data() {
        return {
            title: 'Vendor',


            order:{
                id:"",
                customer:"",
                items:[],
                destination:"",
                total:0,
                discount:"",
                final_amount:0,
                address:""
            },

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Vendor',
                }
            ],


        }
    },
    created(){

        // //dispatch get orders
        // console.log("calling get all Orders")

        // this.$store.dispatch('vendor/getOrders')

        //dispatch get products

        //dispatch get sales
    },
    computed:{
        ...mapState({
            orderdetails: state => state.vendor.orders,
            searchedorders: state => state.vendor.searchedOrders,
        }),

    } ,
    mounted() {
        // For scroll page top for every Route 
        window.scrollTo(0, 0)

        //receive orders
        console.log("received orders on mount:", this.orderdetails)
 
   
        //receive products

        //receive sales

    },
    methods:{


    },
    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Vendor Dashboard - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>