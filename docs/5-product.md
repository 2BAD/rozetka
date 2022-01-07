[> Back to homepage](../README.md#documentation)

## Product API

### Details

<code>details(productId: number)</code>

Returns: <code>Promise<[Details](../source/type/product/Details.ts)></code>

<details>
  <summary>Response sample</summary>

```json
{
  "id": 6802844,
  "title": "Упаковка минеральной негазированной воды Evian 0.5 л х 6 бутылок (3068320055008_3068320055022)",
  "title_suffix": "",
  "price": 180,
  "old_price": 239,
  "price_pcs": "6.57",
  "href": "https://rozetka.com.ua/evian_3068320055022/p6802844/",
  "status": "active",
  "status_inherited": "active",
  "sell_status": "available",
  "category_id": 4639872,
  "seller_id": 5,
  "merchant_id": 1,
  "brand": "Evian",
  "brand_id": 18534,
  "group_id": 0,
  "group_name": null,
  "group_title": null,
  "pl_bonus_charge_pcs": 0,
  "pl_use_instant_bonus": 0,
  "state": "new",
  "docket": null,
  "mpath": ".4626923.4624997.4633001.4625018.4639872.",
  "is_group_primary": 0,
  "dispatch": 1,
  "premium": 0,
  "preorder": 0,
  "comments_amount": 4,
  "comments_mark": 5,
  "gift": null,
  "tag": null,
  "pictograms": null,
  "title_mode": null,
  "use_group_links": null,
  "is_need_street_id": false,
  "image_main": "https://content1.rozetka.com.ua/goods/images/big_tile/10709078.jpg",
  "images": {
    "main": "https://content1.rozetka.com.ua/goods/images/big_tile/10709078.jpg",
    "preview": "https://content1.rozetka.com.ua/goods/images/preview/10709078.jpg",
    "hover": "https://content1.rozetka.com.ua/goods/images/big_tile/10709078.jpg",
    "all_images": ["https://content1.rozetka.com.ua/goods/images/original/10709078.jpg"]
  },
  "parent_category_id": 4626923,
  "is_docket": false,
  "primary_good_title": null,
  "groups": [],
  "stars": "100%",
  "discount": 25,
  "config": {
    "title": true,
    "brand": false,
    "image": true,
    "price": true,
    "old_price": true,
    "promo_price": true,
    "status": true,
    "bonus": true,
    "gift": true,
    "rating": true,
    "wishlist_button": true,
    "compare_button": true,
    "buy_button": true,
    "tags": true,
    "pictograms": true,
    "description": true,
    "variables": true
  }
}
```

</details>

### Descriptions

<code>descriptions(productId: number)</code>

Returns: <code>Promise<[Descriptions](../source/type/product/Descriptions.ts)></code>

<details>
  <summary>Response sample</summary>

```json
{
  "text": "<p> <p><b>Evian</b> – это cамая известная в мире минеральная вода. Она добывается на северном склоне французских Альп, в районе далеком от городов и промышленного производства. </p><p>В течение своего долгого 15-летнего пути <b>Evian</b> проходит природный фильтр из горных пород, обогащаясь естественными минеральными веществами. Благодаря этому, <b>Evian</b> приобретает кристальную чистоту и естественный уникально сбалансированный минеральный состав.</p><p><b><i>В упаковке 24 бутылки!</i></b></p>",
  "html": null,
  "isRichNoLimit": false,
  "rich": null
}
```

</details>

### Characteristics

<code>characteristics(productId: number)</code>

Returns: <code>Promise<[Characteristics](../source/type/product/Characteristics.ts)></code>

<details>
  <summary>Response sample</summary>

```json
[
  {
    "group_id": 0,
    "group_order": 99999999,
    "groupTitle": "",
    "options": [
      {
        "id": 147152,
        "type": "List",
        "name": "upakovka147152",
        "title": "Упаковка",
        "category_id": 4626923,
        "status": "active",
        "order": 3,
        "in_short": 0,
        "comparable": "main",
        "values": [
          {
            "title": "Пластиковая бутылка",
            "href": "/voda/c4639872/upakovka147152=plastikovaya/"
          }
        ]
      },
      {
        "id": 168958,
        "type": "ComboBox",
        "name": "stepen-gazirovaniya",
        "title": "Степень газирования",
        "category_id": 4625018,
        "status": "active",
        "order": 21,
        "in_short": 0,
        "comparable": "main",
        "values": [
          {
            "title": "Без газа",
            "href": "/voda/c4639872/stepen-gazirovaniya=bez-gaza/"
          }
        ]
      },
      {
        "id": 71581,
        "type": "ComboBox",
        "name": "objom-71581",
        "title": "Объем",
        "category_id": 4633001,
        "status": "active",
        "order": 24,
        "in_short": 0,
        "comparable": "main",
        "values": [
          {
            "title": "0.5 л",
            "href": "/voda/c4639872/objom-71581=0-5-0-99-l/"
          }
        ]
      },
      {
        "id": 168950,
        "type": "List",
        "name": "tip168950",
        "title": "Тип",
        "category_id": 4639872,
        "status": "active",
        "order": 27,
        "in_short": 0,
        "comparable": "main",
        "values": [
          {
            "title": "Минеральная",
            "href": "/voda/c4639872/tip168950=mineralnaya/"
          }
        ]
      },
      {
        "id": 98900,
        "type": "ListValues",
        "name": "strana-proizvoditelj-tovara-90098",
        "title": "Страна-производитель",
        "category_id": 0,
        "status": "active",
        "order": 50,
        "in_short": 0,
        "comparable": "main",
        "values": [
          {
            "title": "Франция",
            "href": "/voda/c4639872/strana-proizvoditelj-tovara-90098=619938/"
          }
        ]
      },
      {
        "id": 92802,
        "type": "ComboBox",
        "name": "kolichestvo-predmetov-92802",
        "title": "Количество в упаковке, шт",
        "category_id": 0,
        "status": "active",
        "order": 60,
        "in_short": 0,
        "comparable": "main",
        "values": [
          {
            "title": "6",
            "href": "/voda/c4639872/kolichestvo-predmetov-92802=475541/"
          }
        ]
      },
      {
        "id": 71434,
        "type": "TextInput",
        "name": "srok-godnosti-71434",
        "title": "Срок хранения",
        "category_id": 4624997,
        "status": "active",
        "order": 65,
        "in_short": 0,
        "comparable": "disable",
        "values": [
          {
            "title": "2 года",
            "href": null
          }
        ]
      }
    ]
  }
]
```

</details>

### Tags

<code>tags(productId: number)</code>

Returns: <code>Promise<[Tags](../source/type/product/Tags.ts)></code>

<details>
  <summary>Response sample</summary>

```json
[
  {
    "id": 965,
    "title": "4 cores",
    "show_in_catalog": 1,
    "show_in_details": 1,
    "is_special_tag": 0,
    "view_position": null,
    "order": 30,
    "has_description": 0,
    "icon": "https://content.rozetka.com.ua/goods_tags/images/original/187287358.png",
    "icon_mobile": "",
    "announce": null
  },
  {
    "id": 1084,
    "title": "RAM 16GB",
    "show_in_catalog": 1,
    "show_in_details": 1,
    "is_special_tag": 0,
    "view_position": null,
    "order": 10,
    "has_description": 0,
    "icon": "https://content1.rozetka.com.ua/goods_tags/images/original/187288532.png",
    "icon_mobile": "",
    "announce": null
  },
  {
    "id": 1239,
    "title": "SSD 1TB",
    "show_in_catalog": 1,
    "show_in_details": 1,
    "is_special_tag": 0,
    "view_position": null,
    "order": 20,
    "has_description": 0,
    "icon": "https://content.rozetka.com.ua/goods_tags/images/original/187288565.png",
    "icon_mobile": "",
    "announce": null
  },
  {
    "id": 28316,
    "title": "Intel Core i7 11-го поколения",
    "show_in_catalog": 1,
    "show_in_details": 1,
    "is_special_tag": 0,
    "view_position": null,
    "order": 5,
    "has_description": 1,
    "icon": "https://content2.rozetka.com.ua/goods_tags/images/original/187292026.jpg",
    "icon_mobile": "",
    "announce": null
  },
  {
    "id": 30622,
    "title": "Возвращаем бонусные гривны на ваш счет!",
    "show_in_catalog": 1,
    "show_in_details": 1,
    "is_special_tag": 1,
    "view_position": 2,
    "order": 49,
    "has_description": 1,
    "icon": "https://content.rozetka.com.ua/goods_tags/images/original/233534378.png",
    "icon_mobile": "",
    "announce": null
  }
]
```

</details>

### Promotion

<code>promotion(productId: number)</code>

Returns: <code>Promise<[Promotion](../source/type/product/Promotion.ts)></code>

### Offer

<code>offer(productId: number)</code>

Returns: <code>Promise<[Offer](../source/type/product/Offer.ts)></code>

<details>
  <summary>Response sample</summary>

```json
{
  "block": {
    "id": 27367,
    "title": "Новинка!",
    "goods_id": 320511304
  },
  "products": [
    {
      "id": 320511304,
      "mpath": ".80253.80004.",
      "href": "https://rozetka.com.ua/asus-90nb0ui3-m00740/p320511304/",
      "group": {
        "id": 0,
        "is_group_primary": 0,
        "href": null
      },
      "category": {
        "id": 80004,
        "title": "Ноутбуки",
        "href": "https://rozetka.com.ua/notebooks/c80004/",
        "use_group_links": false,
        "root_id": 80004
      },
      "title": "Ноутбук Asus Vivobook Pro 16X OLED N7600PC-L2041T (90NB0UI3-M00740) Cool Silver",
      "brand": {
        "id": 4,
        "title": "Asus",
        "name": "asus",
        "logo": "https://content1.rozetka.com.ua/producers/logo/original/187345089.jpg"
      },
      "comments": {
        "amount": 0,
        "mark": 0
      },
      "docket": "Экран 16\" OLED (3840x2400) WQUXGA, глянцевый / Intel Core i7-11370H (3.3 - 4.8 ГГц) / RAM 16 ГБ / SSD 1 ТБ / nVidia GeForce RTX 3050, 4 ГБ / без ОД / Wi-Fi / Bluetooth / веб-камера / Windows 10 Home / 1.95 кг / серебристый",
      "images": [
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/225172348.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/225172348.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/225172348.jpg"
        },
        {
          "big_tile": "https://content.rozetka.com.ua/goods/images/big_tile/236702786.png",
          "original": "https://content.rozetka.com.ua/goods/images/original/236702786.png",
          "preview": "https://content.rozetka.com.ua/goods/images/preview/236702786.png"
        },
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/236699753.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/236699753.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/236699753.jpg"
        },
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/225172390.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/225172390.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/225172390.jpg"
        },
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/225172389.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/225172389.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/225172389.jpg"
        },
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/225172386.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/225172386.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/225172386.jpg"
        },
        {
          "big_tile": "https://content2.rozetka.com.ua/goods/images/big_tile/225172387.jpg",
          "original": "https://content2.rozetka.com.ua/goods/images/original/225172387.jpg",
          "preview": "https://content2.rozetka.com.ua/goods/images/preview/225172387.jpg"
        },
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/225172388.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/225172388.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/225172388.jpg"
        },
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/225172391.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/225172391.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/225172391.jpg"
        },
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/225172392.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/225172392.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/225172392.jpg"
        },
        {
          "big_tile": "https://content2.rozetka.com.ua/goods/images/big_tile/225172393.jpg",
          "original": "https://content2.rozetka.com.ua/goods/images/original/225172393.jpg",
          "preview": "https://content2.rozetka.com.ua/goods/images/preview/225172393.jpg"
        },
        {
          "big_tile": "https://content.rozetka.com.ua/goods/images/big_tile/225172394.jpg",
          "original": "https://content.rozetka.com.ua/goods/images/original/225172394.jpg",
          "preview": "https://content.rozetka.com.ua/goods/images/preview/225172394.jpg"
        },
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/225172395.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/225172395.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/225172395.jpg"
        },
        {
          "big_tile": "https://content2.rozetka.com.ua/goods/images/big_tile/225172396.jpg",
          "original": "https://content2.rozetka.com.ua/goods/images/original/225172396.jpg",
          "preview": "https://content2.rozetka.com.ua/goods/images/preview/225172396.jpg"
        },
        {
          "big_tile": "https://content1.rozetka.com.ua/goods/images/big_tile/225172397.jpg",
          "original": "https://content1.rozetka.com.ua/goods/images/original/225172397.jpg",
          "preview": "https://content1.rozetka.com.ua/goods/images/preview/225172397.jpg"
        },
        {
          "big_tile": "https://content.rozetka.com.ua/goods/images/big_tile/225172398.jpg",
          "original": "https://content.rozetka.com.ua/goods/images/original/225172398.jpg",
          "preview": "https://content.rozetka.com.ua/goods/images/preview/225172398.jpg"
        }
      ],
      "loyalty": {
        "pl_bonus_charge_pcs": 0,
        "pl_use_instant_bonus": 0
      },
      "price": {
        "old": 55999,
        "current": 52999,
        "pcs": "1934.27"
      },
      "status": "active",
      "status_inherited": "active",
      "sell_status": "available",
      "merchant_id": 1,
      "seller_id": 5,
      "state": "new",
      "tag": {
        "name": "action",
        "title": "Акция",
        "priority": 9
      },
      "premium_program": false,
      "sla_id": 8124
    }
  ]
}
```

</details>

### Price

<code>price(productId: number)</code>

Returns: <code>Promise<[Price](../source/type/product/Price.ts)></code>

<details>
  <summary>Response sample</summary>

```json
{
  "old_price": 241,
  "old_price_formatted": "241",
  "old_usd_price": "8.80",
  "price": 241,
  "price_formatted": "241",
  "sell_status": "available",
  "status": "active",
  "usd_price": "8.80",
  "pl_charge_pcs": 0,
  "pl_use_instant_bonus": false,
  "pl_premium_bonus_charge_pcs": 2,
  "show_in_site": null,
  "rests": -1,
  "min_price": 0,
  "max_price": 0,
  "has_shops": false,
  "info": null
}
```

</details>

### relatedProducts

<code>relatedProducts(productId: number)</code>

Returns: <code>Promise<[relatedProducts](../source/type/product/relatedProducts.ts)></code>
