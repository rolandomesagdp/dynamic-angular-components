import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Catalog } from './catalog.interface';
import { Dehum } from '../products/dehum';
import { HeatPump } from '../products/heatpump.interface';
import { ElectricHeater } from '../products/electric-heater';

@Injectable()
export class CatalogService {

  constructor () { }

  getCatalog(): Observable<Catalog> {
    const catalog: Catalog = {
      heating: {
        heatPumps: this.getHeatPumps(),
        electricHeaters: this.getElectricHeaters()
      },
      dehumidifier: {
        dehumidifiers: this.getDehumidifiers()
      }
    };
    return of(catalog);
  }

  private getDehumidifiers(): Dehum[] {
    const dehumidifiers: Dehum[] = [{
      id: 1,
      productName: "Dehumidifier Zodiac",
      brand: "Zodiac",
      type: "dehum",
      capacity: 150,
      blowingType: "Blowing type 1",
      acousticPressure: 125
    }, {
      id: 2,
      productName: "Dehumidifier Astral Pool",
      brand: "AstralPool",
      type: "dehum",
      capacity: 25,
      blowingType: "Blowing type 2",
      acousticPressure: 100
    }, {
      id: 3,
      productName: "Dehumidifier GRE",
      brand: "GRE",
      type: "dehum",
      capacity: 700,
      blowingType: "Blowing type 3",
      acousticPressure: 600
    }, {
      id: 4,
      productName: "Dehumidifier Fluidra",
      brand: "Fluidra",
      type: "dehum",
      capacity: 75,
      blowingType: "Blowing type 4",
      acousticPressure: 40
    }, {
      id: 5,
      productName: "Dehumidifier Zodiac 1",
      brand: "Zodiac",
      type: "dehum",
      capacity: 1200,
      blowingType: "Blowing type 5",
      acousticPressure: 7000
    }, {
      id: 6,
      productName: "Dehumidifier GRE 1",
      brand: "GRE",
      type: "dehum",
      capacity: 1.5,
      blowingType: "Blowing type 6",
      acousticPressure: 2.6
    }];
    return dehumidifiers;
  }

  private getHeatPumps(): HeatPump[] {
    const heatPumpArray: HeatPump[] = [
      {
        id: 1,
        productName: "Heatpump Zodiac",
        brand: "Zodiac",
        type: "heatPump",
        refrigerant: "Refrigerant 1",
        minPower: 125,
        minCOP: 2,
      },
      {
        id: 2,
        productName: "Heatpump Astral Pool",
        brand: "AstralPool",
        type: "heatPump",
        refrigerant: "Refrigerant 2",
        minPower: 200,
        minCOP: 5,
      },
      {
        id: 3,
        productName: "Heatpump Zodiac 3",
        brand: "Zodiac",
        type: "heatPump",
        refrigerant: "Refrigerant 3",
        minPower: 125,
        minCOP: 2,
      },
      {
        id: 4,
        productName: "Heatpump Astral Pool 4",
        brand: "AstralPool",
        type: "heatPump",
        refrigerant: "Refrigerant 2",
        minPower: 200,
        minCOP: 5,
      },
      {
        id: 5,
        productName: "Heatpump Zodiac 5",
        brand: "Zodiac",
        type: "heatPump",
        refrigerant: "Refrigerant 1",
        minPower: 125,
        minCOP: 2,
      },
      {
        id: 6,
        productName: "Heatpump Astral Pool 6",
        brand: "AstralPool",
        type: "heatPump",
        refrigerant: "Refrigerant 2",
        minPower: 200,
        minCOP: 5,
      }

    ];
    return heatPumpArray;
  }

  private getElectricHeaters(): ElectricHeater[] {
    const heatPumpArray: ElectricHeater[] = [
      {
        id: 1,
        productName: "Electric Heater Zodiac",
        brand: "Zodiac",
        type: "electricHeater",
        maxPower: 1000,
        poolTreatment: "Water treatment",
        timeToReachSetPoint: 3
      },
      {
        id: 2,
        productName: "Electric Heater Astral Pool",
        brand: "AstralPool",
        type: "electricHeater",
        maxPower: 500,
        poolTreatment: "Air treatment",
        timeToReachSetPoint: 10
      },
      {
        id: 3,
        productName: "Electric Heater Zodiac 3",
        brand: "Zodiac",
        type: "electricHeater",
        maxPower: 1000,
        poolTreatment: "Water treatment",
        timeToReachSetPoint: 3
      },
      {
        id: 4,
        productName: "Electric Heater Astral Pool 4",
        brand: "AstralPool",
        type: "electricHeater",
        maxPower: 500,
        poolTreatment: "Air treatment",
        timeToReachSetPoint: 10
      },
      {
        id: 5,
        productName: "Electric Heater Zodiac 5",
        brand: "Zodiac",
        type: "electricHeater",
        maxPower: 1000,
        poolTreatment: "Water treatment",
        timeToReachSetPoint: 3
      },
      {
        id: 6,
        productName: "Electric Heater Astral Pool 6",
        brand: "AstralPool",
        type: "electricHeater",
        maxPower: 500,
        poolTreatment: "Air treatment",
        timeToReachSetPoint: 10
      }
    ];
    return heatPumpArray;
  }
}
