//  C'deki yapısı, bu yapının benzerini ES6 kuracağız
//  struct Ornek { unsigned long id; char kuladi[16]; float miktar } 
class Ornek {
    constructor (buffer = new ArrayBuffer(24)) {
        this.buffer = buffer
    }

    set buffer (buffer) {
        this._buffer    = buffer
        this._id        = new Uint32Array (this._buffer,  0,  1)
        this._kuladi  = new Uint8Array  (this._buffer,  4, 16)
        this._miktar = new Float32Array(this._buffer, 20,  1)
    }

    get buffer ()     { return this._buffer       }
    set id (v)        { this._id[0] = v           }
    get id ()         { return this._id[0]        }
    set kuladi (v)  { this._kuladi[0] = v     }
    get kuladi ()   { return this._kuladi[0]  }
    set miktar (v) { this._miktar[0] = v    }
    get miktar ()  { return this._miktar[0] }
}

let nesne = new Ornek()
nesne.id = 7
nesne.kuladi = 90
nesne.miktar = 42.0

console.log(nesne.buffer, nesne.id, nesne.kuladi, nesne.miktar)