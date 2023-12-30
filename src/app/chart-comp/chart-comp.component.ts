import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from './chart.service';

@Component({
    selector: 'chart-comp',
    templateUrl: './chart-comp.component.html',
    styleUrl: './chart-comp.component.scss'
})

export class ChartComponent {
    
    chartsInfo: any;
    amountsArray: any = [];
    constructor(private httpService: DataService) { }

    ngOnInit() {
        this.httpService.getChartData().subscribe(
            (response) => {
                this.chartsInfo = response;
                this.chartsInfo.transactions.forEach((item: any) => {
                    this.amountsArray.push({
                        name: item.name,
                        data: [item.amount + '0000']
                    });
                });
            },
            (error) => { console.log(error); });
    }
    highcharts = Highcharts;
    chartOptions: any = {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cash'
            }
        },
        tooltip: {
            headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Jan',
            data: [406292, 260000, 107000, 68300, 27500, 14500]
        },
        {
            name: 'Feb',
            data: [51086, 136000, 5500, 141000, 107180, 77000]
        },
        {
            name: 'Mar',
            data: [7676454, 4343656, 232321, 645453, 107180, 77000]
        },
        {
            name: 'Apr',
            data: [875854, 136000, 5500454, 321124, 434242, 77000]
        },
        {
            name: 'May',
            data: [546565, 136000, 5500343, 141000, 767645, 77000]
        },
        {
            name: 'Jun',
            data: [878787, 136000, 550054, 141000, 431335, 654322]
        },
        {
            name: 'Jul',
            data: [879890, 136000, 656522, 54545, 107180, 123456]
        },
        {
            name: 'Aug',
            data: [644231, 136000, 211121, 243423, 107180, 77000]
        },
        {
            name: 'Sep',
            data: [665789, 136000, 874387, 353242, 8675744, 99743]
        },
        {
            name: 'Oct',
            data: [534234, 136000, 43524354, 756352, 107180, 67756]
        },
        {
            name: 'Nov',
            data: [768544, 136000, 43244323, 543534, 107180, 65434]
        },
        {
            name: 'Dec',
            data: [3233435, 14300, 6454, 6543212, 107180, 221343]
        },
        ]
    };


}

