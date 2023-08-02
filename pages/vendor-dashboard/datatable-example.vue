<template>
    <div>
        <div class="content-heading">
          <h3>VGT Flatpickr Column Filter</h3>
          <small>A demo demonstrating daterange column filtering using flatpickr datepicker.</small>
        <br>
        <br>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-md-12">
              <div class="panel panel-default">
                <vue-good-table :columns="columns" :rows="rows" :pagination-options="{
                                                        enabled: true,
                                                        mode: 'records',
                                                        perPage: 10,
                                                        setCurrentPage: 1,
                                                    }" :sort-options="{
                                                        enabled: true,
                                                        initialSortBy: {field: 'StartDate', type: 'asc'}
                                                    }" styleClass="vgt-table condensed striped" :search-options="{
                                                        searchFn: filterFunction
                                                    }" :rowStyleClass="rowStyleClassFn">
                  <template slot="table-row" slot-scope="props">
                                    <span v-if="props.column.field == 'AccountStatus'" :class="getAccountStatusCellClass(props.row)">
                                        {{props.formattedRow[props.column.field]}}
                                    </span>
                                    <span v-else-if="props.column.field == 'AccountName'">
                                        <a href="#">{{ props.formattedRow[props.column.field] }}</a>
                                    </span>
                                    <span v-else>
                                        {{props.formattedRow[props.column.field]}}
                                    </span>
                                </template>
                </vue-good-table>
              </div>
            </div>
          </div>
        </div>
    </div>
    </template>
    
    <script>
    import VueGoodTablePlugin from "vue-good-table";
    import flatPickr from "flatpickr";
    
    import "flatpickr/dist/flatpickr.css";
    import "flatpickr/dist/themes/material_blue.css";
    
    export default {
      name: "HelloWorld",
      data() {
        return {
          components: {
            flatPickr
          },
          columns: [
            {
              label: "Account Name",
              field: "AccountName",
              filterable: true,
              filterOptions: {
                enabled: true,
                placeholder: ""
              }
            },
            {
              label: "Sales Region",
              field: "Region",
              filterable: true,
              filterOptions: {
                enabled: true,
                placeholder: ""
              }
            },
            {
              label: "Received Date",
              field: "Received",
              filterable: true,
              type: "date",
              dateInputFormat: "MM-DD-YYYY",
              dateOutputFormat: "MM-DD-YYYY",
              filterOptions: {
                enabled: true,
                placeholder: "Filter Received",
                filterFn: this.dateRangeFilter
              }
            },
            {
              label: "Start Date",
              field: "StartDate",
              filterable: true,
              type: "date",
              dateInputFormat: "MM-DD-YYYY",
              dateOutputFormat: "MM-DD-YYYY",
              filterOptions: {
                enabled: true,
                placeholder: "Filter Start Date",
                filterFn: this.dateRangeFilter
              }
            },
            {
              label: "Need By Date",
              field: "NeedByDate",
              filterable: true,
              type: "date",
              dateInputFormat: "MM-DD-YYYY",
              dateOutputFormat: "MM-DD-YYYY",
              filterOptions: {
                enabled: true,
                placeholder: "Filter Need By Date",
                filterFn: this.dateRangeFilter
              }
            },
            {
              label: "Sales Firm",
              field: "SalesFirm",
              filterable: true,
              tdClass: this.td,
              thClass: this.th,
              filterOptions: {
                enabled: true,
                placeholder: ""
              }
            },
            {
              label: "Broker",
              field: "Broker",
              filterable: true,
              filterOptions: {
                enabled: true,
                placeholder: ""
              }
            },
            {
              label: "Account Status",
              field: "AccountStatus",
              filterable: true,
              filterOptions: {
                enabled: true,
                placeholder: "All",
                filterDropdownItems: ["Closed", "Open"]
              }
            },
            {
              label: "Flag",
              field: "Flag",
              filterable: true,
              filterOptions: {
                enabled: true,
                placeholder: ""
              }
            },
            {
              label: "Assets",
              field: "Assets",
              filterable: true,
              formatFn: this.formatFn,
              filterOptions: {
                enabled: true,
                placeholder: ""
              }
            },
            {
              label: "Sales Percent",
              field: "SalesPerc",
              filterable: true,
              formatFn: this.percentageFormatFn,
              filterOptions: {
                enabled: true,
                placeholder: ""
              }
            }
          ],
          rows: [
            {
              AccountName: "Some Account",
              Region: "US",
              Received: "02-10-2018",
              StartDate: "04-15-2018",
              NeedByDate: "10-31-2018",
              SalesFirm: "Out of State Firm",
              Broker: "Joey Badass",
              AccountStatus: "Closed",
              Flag: "FA",
              Assets: "21000000",
              SalesPerc: "0.0000544356"
            },
            {
              AccountName: "New Account",
              Region: "EU",
              Received: "03-16-2018",
              StartDate: "09-15-2018",
              NeedByDate: "12-31-2018",
              SalesFirm: "Overseas Firm",
              Broker: "Lil Yachty",
              AccountStatus: "Closed",
              Flag: "FA",
              Assets: "9000000",
              SalesPerc: "0.1733242"
            },
            {
              AccountName: "Old Account",
              Region: "AS",
              Received: "09-18-2018",
              StartDate: "06-21-2018",
              NeedByDate: "11-22-2018",
              SalesFirm: "New Firm",
              Broker: "Mos Def",
              AccountStatus: "Closed",
              Flag: "BD",
              Assets: "7000144",
              SalesPerc: "0.653224324"
            },
            {
              AccountName: "Some Account",
              Region: "US",
              Received: "12-02-2018",
              StartDate: "07-01-2018",
              NeedByDate: "10-31-2018",
              SalesFirm: "Local Firm",
              Broker: "21 Savage",
              AccountStatus: "Closed",
              Flag: "CL",
              Assets: "4000321",
              SalesPerc: "0.32453222"
            },
            {
              AccountName: "Important Account",
              Region: "US",
              Received: "05-14-2018",
              StartDate: "06-15-2018",
              NeedByDate: "11-05-2018",
              SalesFirm: "Local Firm",
              Broker: "Childish Gambino",
              AccountStatus: "Open",
              Flag: "OP",
              Assets: "11000122",
              SalesPerc: "0.4321134"
            },
            {
              AccountName: "Overseas Account",
              Region: "US",
              Received: "08-01-2018",
              StartDate: "04-15-2018",
              NeedByDate: "12-31-2018",
              SalesFirm: "Local Firm",
              Broker: "Drake",
              AccountStatus: "Open",
              Flag: "XX",
              Assets: "$60000000",
              SalesPerc: "1.12"
            },
            {
              AccountName: "Local Account",
              Region: "AS",
              Received: "11-24-2018",
              StartDate: "06-07-2018",
              NeedByDate: "01-09-2019",
              SalesFirm: "New Firm",
              Broker: "Mobb Deep",
              AccountStatus: "Closed",
              Flag: "FA",
              Assets: "550000",
              SalesPerc: "0.223423432"
            },
            {
              AccountName: "Special Account",
              Region: "US",
              Received: "12-21-2018",
              StartDate: "05-16-2018",
              NeedByDate: "12-04-2019",
              SalesFirm: "Out of State Firm",
              Broker: "Living Legends",
              AccountStatus: "Closed",
              Flag: "CL",
              Assets: "600000",
              SalesPerc: "0.12132322"
            },
            {
              AccountName: "New Account",
              Region: "EU",
              Received: "10-28-2018",
              StartDate: "07-06-2018",
              NeedByDate: "11-19-2019",
              SalesFirm: "Overseas Firm",
              Broker: "Nas",
              AccountStatus: "Closed",
              Flag: "SF",
              Assets: "1000000",
              SalesPerc: "0.2231312"
            },
            {
              AccountName: "Overseas Account",
              Region: "US",
              Received: "09-30-2018",
              StartDate: "09-16-2018",
              NeedByDate: "10-31-2019",
              SalesFirm: "Local Firm",
              Broker: "Juice WRLD",
              AccountStatus: "Open",
              Flag: "SF",
              Assets: "4000166",
              SalesPerc: "0.999976722"
            },
            {
              AccountName: "Local Account",
              Region: "US",
              Received: "08-14-2018",
              StartDate: "10-06-2018",
              NeedByDate: "10-17-2018",
              SalesFirm: "Local Firm",
              Broker: "Lil Bibby",
              AccountStatus: "Open",
              Flag: "CL",
              Assets: "9184122",
              SalesPerc: "0.132122"
            },
            {
              AccountName: "Important Account",
              Region: "AS",
              Received: "07-27-2018",
              StartDate: "12-06-2018",
              NeedByDate: "10-22-2018",
              SalesFirm: "Overseas Firm",
              Broker: "Lil Bibby",
              AccountStatus: "Closed",
              Flag: "FA",
              Assets: "10122844",
              SalesPerc: "0.0000122"
            },
            {
              AccountName: "Important Account",
              Region: "EU",
              Received: "05-21-2018",
              StartDate: "01-06-2019",
              NeedByDate: "11-05-2018",
              SalesFirm: "New Firm",
              Broker: "Rich Tha Kidd",
              AccountStatus: "Open",
              Flag: "NA",
              Assets: "13422698",
              SalesPerc: "0.2132122"
            }
          ]
        };
      },
      methods: {
        dateRangeFilter(data, filterString) {
          let dateRange = filterString.split("to");
          let startDate = Date.parse(dateRange[0]);
          let endDate = Date.parse(dateRange[1]);
          return (data =
            Date.parse(data) >= startDate && Date.parse(data) <= endDate);
        },
        getAccountStatusCellClass(row) {
          return row.AccountStatus === "Closed"
            ? "badge badge-secondary"
            : "badge badge-info";
        },
        rowStyleClassFn(row) {
          return "VGT-row";
        },
        // formatFn: function(value) {
        //     let formatValue = parseFloat(value.toFixed(4)).toLocaleString('en');
        //     return '$' + formatValue;
        // },
        percentageFormatFn: function(value) {
          value = Math.trunc(value * 100);
          if (value == 0) {
            return "< 1%";
          }
          return value + "%";
        },
        filterFunction() {
          let res = this.rows.filter(record => record.AccountStatus === "Closed");
          return (this.rows = res);
        }
      },
      mounted() {
        let inputs = [
          'input[placeholder="Filter Received"]',
          'input[placeholder="Filter Start Date"]',
          'input[placeholder="Filter Need By Date"]'
        ];
        inputs.forEach(function(input) {
          flatPickr(input, {
            dateFormat: "m-d-Y",
            mode: "range",
            allowInput: true
          });
        });
      }
    };
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    h1,
    h2 {
      font-weight: normal;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
    
    .vgt-table td {
      padding: 5px 25px 5px !important;
      vertical-align: middle !important;
      font-size: 14px !important;
    }
    .vgt-table th {
      text-align: center !important;
      font-size: 14px !important;
    }
    </style>
    