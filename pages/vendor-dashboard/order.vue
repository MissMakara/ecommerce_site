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
                                <b-nav-item to="/vendor-dashboard/product"><i class="fas fa-shopping-cart"></i>Products</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/order"><i class="fas fa-shopping-bag"></i>Orders</b-nav-item>
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
                                            <h4>Orders</h4>
                                            <div>
                                                <button v-on:click="openOrder()" type="button" class="btn btn-primary">Show Orders</button>
                                            </div>
                                                <!-- <div class="table-responsive">
                                                <table class="table pending_table">
                                                    <thead class="thead-light">
                                                        <tr>
                                                        <th scope="col">Order Id</th> -->
                                                        <!-- <th scope="col">Product ID</th> -->
                                                        <!-- <th scope="col">Quantity</th> -->
                                                        <!-- <th scope="col">Destination</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-for="orders in this.orderdetails" :key="orders.id">
                                                       
                                                        <tr v-for="item in orders" :key="item.id"> -->
                                                             <!-- {{ item}} -->

                                                            <!-- <td>
                                                                <b-navbar-nav>  -->
                                                                    <!-- <b-nav-item onclick="openOrder()" to="#"> -->
                                                                    <!-- <b-nav-item v-on:click="openOrder()">
                                                                        {{ item.order_id }}
                                                                    </b-nav-item>
                                                                </b-navbar-nav>
                                                            </td> -->
                                                            <!-- <td>{{ item.product_id }}</td> -->
                                                            <!-- <td>{{ item.product_quantity }}</td> -->
                                                            <!-- <td>{{ item.destination_details + " " + item.destination_name }}</td>
                                                            <td>{{ item.status }}</td>
                                                            <td>{{ item.total }}</td>
                                                        
                                                        
                                                       </tr>
                                                    </tbody>
                                                </table>
                                 
                                            </div> -->
                                            <div>
                                                <vue-good-table
                                                        title="Dynamic Table"
                                                        :columns="columns"
                                                        :rows=this.order_rows
                                                        :lineNumbers="false"
                                                        :sort-options="{
                                                            enabled: true,
                                                            initialSortBy: {field: 'order_id', type: 'asc'}
                                                            }"
                                                      
                                                        :globalSearch="true"
                                                        :paginate="true"
                                                      
                                                        styleClass="table condensed table-bordered table-striped"
                                                        >
                                                </vue-good-table>
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
import { Header, Item } from "vue3-easy-data-table";
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import "flatpickr/dist/themes/material_blue.css";
    

export default {
    name: 'VendorDashboard',
    data() {
        return {
            title: 'Vendor',

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
            order_rows:[],
            uniqueStatusesArray:[],
            columns:[
                {
                label: 'Order_id',
                field: 'order_id',
                filterable: true,
                },
                {
                label: 'Destination',
                field: 'destination',
                // type: 'number',
                filterable: true,
                filterOptions: {
                    // styleClass: 'class1', // class to be added to the parent th element
                    enabled: true, // enable filter for this column
                    placeholder: 'Filter Here', // placeholder for filter input
                    // filterValue: 'Jane', // initial populated value for this filter
                    filterDropdownItems: "" // dropdown (with selected values) instead of text input
                    // filterFn: this.newFilterOptions, //custom filter function that
                    // trigger: 'enter', //only trigger on enter not on keyup 
                    },
                html: false,
                },
                // {
                //     label: 'joined On',
                //     field: 'createdAt',
                //     type: 'date',
                //     dateInputFormat: 'yyyy-MM-dd', // expects 2018-03-16
                //     dateOutputFormat: 'MMM do yyyy', // outputs Mar 16th 2018
                //     filterOptions: {
                //         enabled: true,
                //         placeholder: "Filter",
                //         filterFn: this.dateRangeFilter
                //     },
                // },
                {
                label: 'Status',
                field: 'status',
                // type: 'number',
                filterable: true,
                filterOptions: {
                    // styleClass: 'class1', // class to be added to the parent th element
                    enabled: true, // enable filter for this column
                    placeholder: 'Filter Here', // placeholder for filter input
                    // filterValue: 'Jane', // initial populated value for this filter
                    filterDropdownItems: "" // dropdown (with selected values) instead of text input
                    // filterFn: this.newFilterOptions, //custom filter function that
                    // trigger: 'enter', //only trigger on enter not on keyup 
                    },

                html: false,
                },
                {
                label: 'Amount',
                field: 'amount',
                type: 'number',
                html: false,
                },
            ],
        
            
        }
    },
    created(){
        //dispatch get orders
        console.log("calling get all Orders")
        this.$store.dispatch('vendor/getOrders')

        //dispatch get products

        //dispatch get sales
       
    },

    computed:{
        ...mapState({
            orderdetails: state => state.vendor.orders,
        }),
       

    } ,
    beforeMount(){
        

    },
    async mounted() {
        // For scroll page top for every Route 
        window.scrollTo(0, 0)
                


        //receive orders
        await this.orderdetails
        console.log("received orders on mount:", this.orderdetails)
        console.log("mounted property calling openOrders...")
        this.openOrder()
        
       
   
        //receive products
    

        //receive sales

    },
    methods:{
        openOrder(){
            this.order_rows=[]
            console.log("In open Order function")
            
            const array_x = this.orderdetails
            console.log("Order details are:", array_x)
            console.log("Iterating through orders multi-d-array")
            for (const item of array_x) {
                // Assign each item to the dictionary using its 'key' as the property name
                // this.$set(this.dictionary, item.key, item.value);
                console.log("item", item)
                for (const index in item){
                    console.log(item[index])
                    // this.order_rows.push(this.order_rows)
                    this.order_rows.push({order_id:item[index].order_id,
                        destination: item[index].destination_name, 
                        status: item[index].status, 
                        amount: item[index].total})

                }
                // assign them into a dictionary for display
                
            }
            // display the final rows
            console.log("order rows are:", this.order_rows)
            // eventBus.$emit("ordersOpen", this.item.order_id)
        },
        newFilterOptions(){
            console.log("In filter selection function")
            this.uniqueStatusesArray =[]

            // Create a Set to store unique status values
            const statusSet = new Set();

            // Iterate over each item in the order_rows array
            this.order_rows.forEach((item) => {
                // Add the status value to the Set
                statusSet.add(item.status);
            });

        // Convert the Set to an array
        this.uniqueStatusesArray = Array.from(statusSet);
        console.log("Unique statuses available", this.uniqueStatusesArray)
            
            
   // Example: { label: 'Status', field: 'status', filterOptions: this.uniqueStatuses }
   
        return this.uniqueStatusesArray;
        },
        

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