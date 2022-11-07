import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-chips-list',
  styleUrls: ['./crypto-chips-list.component.scss'],
  templateUrl: './crypto-chips-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoChipsListComponent {
  readonly cryptoList$: Observable<CryptoModel[]> =
    this._cryptoService.getAll();

  constructor(private _cryptoService: CryptoService) {}
}
