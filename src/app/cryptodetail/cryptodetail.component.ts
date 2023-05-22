import { CryptoDetails } from './../interfaces/CryptoAssets';
import { CryptoPrice } from './../interfaces/CryptoHistory';
import { map } from 'rxjs/operators';
import { ApiService } from './../api.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { combineLatest, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-cryptodetail',
  templateUrl: './cryptodetail.component.html',
  styleUrls: ['./cryptodetail.component.css'],
})
export class CryptodetailComponent {
  id: string = this.route.snapshot.paramMap.get('id') || '';
  crypto$: Observable<CryptoDetails> = this.apiService.getAssetById(this.id);

  data$: Observable<CryptoPrice[]> = this.apiService.getHistoryData(this.id);

  config$: Observable<ZingchartAngular.graphset> = combineLatest([
    this.data$,
    this.crypto$,
  ]).pipe(
    map(([cryptoPrices, current]) => ({
      type: 'line',
      backgroundColor: 'transparent',
      utc: true,
      title: {
        text: `${current.name} Price`,
        fontSize: 24,
        adjustLayout: true,
        fontColor: '#d2d5db',
      },
      legend: {
        layout: 'float',
        backgroundColor: 'none',
        borderWidth: 0,
        shadow: false,
        align: 'center',
        adjustLayout: true,
        toggleAction: 'remove',
        item: {
          cursor: 'hand',
        },
      },
      scaleX: {
        minValue: cryptoPrices[0].time,
        step: 86400000,
        lineColor: '#f6f7f8',
        transform: {
          type: 'date',
          all: "%d %M '%y",
          item: {
            visible: false,
          },
        },
        item: {
          fontColor: '#d1d5db',
        },
        label: {
          visible: false,
        },
      },
      scaleY: {
        lineColor: '#f6f7f8',
        format: '$%v',
        guide: {
          lineStyle: 'solid',
          lineColor: '#3a5069',
        },
        label: {
          text: 'Price (USD)',
          fontColor: '#d1d5db',
        },
        item: {
          fontColor: '#d1d5db',
        },
        markers: [
          {
            type: 'line',
            range: [cryptoPrices[0].priceUsd],
            lineColor: '#d2d5db',
            lineStyle: 'dotted',
            lineWidth: 2,
            label: {
              text: (
                Math.round(Number(cryptoPrices[0].priceUsd) * 100) / 100
              ).toLocaleString(),
              backgroundColor: '#f6f7f8',
              borderRadius: '5px',
              offsetX: 1350,
              offsetY: 8,
            },
          },
        ],
        minorTicks: 0,
        thousandsSeparator: ',',
      },
      crosshairX: {
        lineColor: '#d2d5db',
        lineStyle: 'dotted',
        lineWidth: 2,
        plotLabel: {
          borderRadius: '5px',
          borderWidth: '1px',
          borderColor: '#f6f7f8',
          padding: '10px',
          fontWeight: 'bold',
          text: 'Price: $%v',
          thousandsSeparator: ',',
        },
        scaleLabel: {
          fontColor: '#000',
          backgroundColor: '#f6f7f8',
          borderRadius: '5px',
        },
        marker: {
          size: 5,
          borderWidth: 2,
          borderColor: 'white',
        },
      },
      crosshairY: {
        lineColor: '#d2d5db',
        lineStyle: 'dotted',
        lineWidth: 2,
        scaleLabel: {
          fontColor: '#000',
          backgroundColor: '#f6f7f8',
          borderRadius: '5px',
        },
      },
      tooltip: {
        visible: false,
      },
      series: [
        {
          values: cryptoPrices.map((cryptoPrice: CryptoPrice) =>
            Number(cryptoPrice.priceUsd)
          ),
          text: current.name,
          legendItem: {
            fontColor: '#1f2937',
            cursor: 'default',
          },
          legendMarker: {
            visible: false,
          },
          marker: {
            backgroundColor: '#007790',
            borderWidth: 1,
            shadow: false,
            borderColor: '#69dbf1',
          },
          highlightMarker: {
            lineWidth: 6,
            backgroundColor: '#007790',
          },
        },
      ],
      plot: {
        highlight: true,
        tooltipText: '%t views: %v<br>%k',
        shadow: false,
        lineWidth: '2px',
        marker: {
          type: 'circle',
          rules: [
            {
              rule: `%v < ${cryptoPrices[0].priceUsd}`,
              backgroundColor: '#ea3842',
            },
            {
              rule: `%v >= ${cryptoPrices[0].priceUsd}`,
              backgroundColor: '#19c785',
            },
          ],
        },
        highlightState: {
          lineWidth: 3,
        },
        rules: [
          {
            rule: `%v < ${cryptoPrices[0].priceUsd}`,
            lineColor: '#ea3842',
          },
          {
            rule: `%v >= ${cryptoPrices[0].priceUsd}`,
            lineColor: '#19c785',
          },
        ],
      },
      plotarea: {
        backgroundColor: 'transparent',
      },
    }))
  );

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) {}
}
