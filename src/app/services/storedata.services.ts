import { Injectable } from "@angular/core";
import "rxjs/add/operator/share";
import { Observable } from "rxjs/Observable";


export abstract class StorageDataService {
  public abstract get(): Storage;
}

@Injectable()
export class LocalStorageServie extends StorageDataService {
  public get(): Storage {
    return localStorage;
  }
}