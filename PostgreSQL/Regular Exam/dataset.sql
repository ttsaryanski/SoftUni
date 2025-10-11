INSERT INTO
    brands (name)
VALUES
    ('Samsung'),
    ('Dell'),
    ('Sony'),
    ('Rowenta'),
    ('Tefal'),
    ('Fujitsu'),
    ('Beko'),
    ('AEG'),
    ('Candy'),
    ('Acer'),
    ('Nikon'),
    ('Garmin');

INSERT INTO
    classifications (name)
VALUES
    ('Phones and tablets'),
    ('Photo and Video'),
    ('Auto and GPS'),
    ('Laptops'),
    ('Small domestic appliances'),
    ('Air conditioners and heaters'),
    ('Home appliances');

INSERT INTO
    customers (
        address,
        loyalty_card,
        first_name,
        last_name,
        phone
    )
VALUES
    (
        '032 Davies Springs Port Samuel PL1 4EH',
        TRUE,
        'Joshua',
        'Martin',
        '0259 287 9243'
    ),
    (
        '441 Louis Cove West Sebastian TW4 7JP',
        FALSE,
        'Scott',
        'Anderson',
        '6011 7354 9447 4013'
    ),
    (
        '442 Louis Cove West Sebastian TW4 7JP',
        FALSE,
        'Jose',
        'Morris',
        '0292751712'
    ),
    (
        '5 Harris Neck New Amelia NE29 7BG',
        FALSE,
        'Ronald',
        'Lewis',
        '0365 325 6567'
    ),
    (
        '814 Butler Plains North Joanneton RG19 8JZ',
        FALSE,
        'Brian',
        'Williams',
        '(03873) 38496'
    ),
    (
        '236 Turner Underpass New Craigport CH64 3TH',
        FALSE,
        'Lauren',
        'Johnson',
        '0309 011 2771'
    ),
    (
        '360 Joe Stream Graychester BS6 9HE',
        FALSE,
        'Thomas',
        'Parker',
        '(04964) 036853'
    ),
    (
        'Studio 69 Roberts Ville North Isabella LE11 9DA',
        FALSE,
        'Karen',
        'Harris',
        '+44(0)593336470'
    ),
    (
        'Flat 19 Brown Mountain Freddieshire BA15 2QE',
        FALSE,
        'Jonathan',
        'Allen',
        '07086 423340'
    ),
    (
        'Studio 45m Johnson Underpass Stevenston MK43 7LX',
        FALSE,
        'Jack',
        'Wilson',
        '09589084304'
    ),
    (
        '18468 Jay Avenue',
        TRUE,
        'Viviyan',
        'Pomroy',
        '116-688-1727'
    ),
    (
        '0 Weeping Birch Pass',
        FALSE,
        'Eziechiele',
        'Redford',
        '869-478-4066'
    ),
    (
        '10 Brickson Park Junction',
        FALSE,
        'Allina',
        'Flowers',
        '517-113-2594'
    ),
    (
        '5431 4th Parkway',
        FALSE,
        'Lucille',
        'Portis',
        '421-650-5470'
    ),
    (
        '46653 Talisman Terrace',
        FALSE,
        'Kliment',
        'Hedman',
        '378-713-7386'
    ),
    (
        '7066 Mendota Hill',
        FALSE,
        'Nils',
        'Gething',
        '434-368-3492'
    ),
    (
        '8763 Drewry Alley',
        FALSE,
        'Janeva',
        'Howard',
        '860-941-0086'
    ),
    (
        '9 Manitowish Crossing',
        FALSE,
        'Judie',
        'O Donnell',
        '797-153-6678'
    ),
    (
        '8596 Moland Way',
        FALSE,
        'Nevin',
        'Troth',
        '909-782-0534'
    ),
    (
        '2 Grim Park',
        FALSE,
        'Isak',
        'Hylden',
        '547-968-5512'
    ),
    (
        '4018 Ohio Trail',
        TRUE,
        'Kirk',
        'Costan',
        '855-773-7132'
    ),
    (
        '9700 Spaight Alley',
        FALSE,
        'Regan',
        'Berryman',
        '933-222-8422'
    ),
    (
        '7593 Armistice Terrace',
        FALSE,
        'Roscoe',
        'Neave',
        '555-999-2736'
    ),
    (
        '82 Kingsford Trail',
        FALSE,
        'Joseito',
        'Dran',
        '810-868-4337'
    ),
    (
        '6025 Tennessee Court',
        FALSE,
        'Madeleine',
        'Vasilevich',
        '177-305-0041'
    ),
    (
        '323 Steensland Parkway',
        FALSE,
        'Cherilyn',
        'Bradane',
        '193-802-5075'
    ),
    (
        '69 Golf Course Trail',
        FALSE,
        'Guntar',
        'Younglove',
        '948-752-8137'
    ),
    (
        '9 Elka Point',
        FALSE,
        'Selene',
        'Mateo',
        '989-312-2204'
    ),
    (
        '51 East Drive',
        FALSE,
        'Shirley',
        'Clayfield',
        '381-516-6503'
    ),
    (
        '65 Kingsford Junction',
        FALSE,
        'Maridel',
        'Toller',
        '288-801-8712'
    ),
    (
        '0154 Meadow Vale Crossing',
        FALSE,
        'Risa',
        'Goldsbrough',
        '407-858-9308'
    ),
    (
        '68 West Park',
        FALSE,
        'Katlin',
        'Everitt',
        '172-658-6143'
    ),
    (
        '804 Ryan Terrace',
        TRUE,
        'Lira',
        'Stickler',
        '288-952-1206'
    ),
    (
        '886 Clemons Point',
        FALSE,
        'Barbie',
        'Gandey',
        '973-458-6217'
    ),
    (
        '370 Welch Crossing',
        FALSE,
        'Osborne',
        'Sunderland',
        '420-863-5412'
    ),
    (
        '1 Hallows Crossing',
        TRUE,
        'Ginevra',
        'Darlow',
        '999-163-2747'
    );

INSERT INTO
    items (
        description,
        name,
        price,
        quantity,
        brand_id,
        classification_id
    )
VALUES
    (
        'Mediatek MT8183 Octa-core, RAM 4 GB, eMMC 32 GB, UMA, Chrome OS',
        'ACER Cromebook CB311',
        512.00,
        12,
        10,
        4
    ),
    (
        'Supports a 24MP CMOS sensor with no optical low-pass filter (OLPF) and the companys latest EXPEED 4 processor.',
        'DSLR camera NIKON D5600',
        1249.00,
        21,
        11,
        2
    ),
    (
        'Rowenta Focus iron provides perfect ironing even in the hardest-to-reach areas.',
        'ROWENTA RR7267WH',
        624.00,
        65,
        4,
        5
    ),
    (
        'The Fujitsu 12RLFW1 is a powerful, versatile addition to any home or business.',
        'Fujitsu 12RLFW1',
        1025.00,
        35,
        6,
        6
    ),
    (
        'Fingerprint (side-mounted), accelerometer, gyro, proximity, compass',
        'Galaxy M52 5G',
        789.00,
        65,
        1,
        1
    ),
    (
        NULL,
        'Galaxy Z Fold3 5G',
        599.00,
        68,
        1,
        1
    ),
    (
        'LED flash, panorama, HDR Video	1080p@30fps',
        'Galaxy F22',
        1254.00,
        78,
        1,
        1
    ),
    (
        'Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)',
        'Galaxy A32 5G',
        489.00,
        112,
        1,
        1
    ),
    (
        'Handle your daily computing tasks with this 13.3-inch Dell Inspiron 2-in-1 notebook.',
        'Inspiron 7000',
        489.00,
        22,
        2,
        4
    ),
    (
        'The Dell XPS 17 laptop delivers powerful performance in an incredibly thin form factor.',
        'XPS 17',
        1456.00,
        70,
        2,
        4
    ),
    (
        'AMD Radeon RX 5600M graphics allow you to game at higher settings with crystal-clear detail and smooth gameplay',
        'G5 15.6\"',
        969.00,
        5,
        2,
        4
    ),
    (
        'Alpha 7R IV combines worlds first high-resolution 61MP back-illuminated Exmor R CMOS',
        'Alpha 7R IV',
        499.00,
        11,
        3,
        2
    ),
    (
        'Remove wrinkles on your garments easily with this Rowenta Steam Care iron.',
        'Smart Steam Iron',
        59.00,
        7,
        4,
        5
    ),
    (
        'Give your garments a fresh-pressed look with this Rowenta Xcel Steam+ handheld steamer.',
        'Xcel Steam+',
        59.00,
        8,
        4,
        5
    ),
    (
        'The granules change color, so you know when to change the filter.',
        'Intense Pure Air',
        27.00,
        2,
        4,
        5
    ),
    (
        'A wide opening lets you insert large chunks or entire pieces of fruit with total ease.',
        'Juice maker ZE370138',
        19.00,
        65,
        5,
        5
    ),
    (
        'The integrated drip tray and dishwasher-safe removable grill plates offer simple cleanup, while the brushed stainless steel housing provides long-lasting use.',
        'GC722834 OPTIGRILL+',
        54.00,
        16,
        5,
        5
    ),
    (
        'This GE window air conditioner runs quietly so you can stay cool with minimal disruption.',
        'InverterXPR 33',
        46.00,
        2,
        6,
        6
    ),
    (
        'The energy-saver mode turns off the fan once the room has reached the desired temperature, saving electricity.',
        'GeneralElectric superCool',
        1225.00,
        4,
        6,
        6
    ),
    (
        ' Self Clean+ to eliminate 99% of bacteria that can form in the drum',
        'CLD washer',
        599.00,
        14,
        7,
        7
    ),
    (
        'Vibration Reduction Technology+ to reduce noise for quiet washing',
        'Inspire 3000',
        699.00,
        24,
        7,
        7
    ),
    (
        'Eliminates 99% of bacteria* in the drum.',
        'Washer dryer combo',
        1099.00,
        45,
        8,
        7
    ),
    (
        'Provides up to 1 hour of battery life.',
        'Path finder S420',
        399.00,
        15,
        12,
        3
    ),
    (
        'Updates are available for your pre-loaded maps of North America.',
        'DriveSmart XS',
        598.00,
        19,
        12,
        3
    ),
    (
        'Connects quickly to send data straight to your device.',
        'Traffic smart s240',
        490.00,
        23,
        12,
        3
    ),
    (
        'Super high quality. Can shoot 4k',
        'UltraHD Cam',
        698.00,
        10,
        3,
        2
    ),
    (
        'Sharp pictures from distance',
        'Eagle Vision GS340',
        1254.00,
        24,
        3,
        2
    ),
    (
        NULL,
        'HD Cam S4000',
        154.00,
        41,
        11,
        2
    ),
    (
        'Gorilla glass display',
        'XS 420',
        754.00,
        40,
        1,
        1
    ),
    (
        'Prism Crush Black with no contracts and no activation fees from Straight Talk',
        'Wrapsafe',
        478.45,
        47,
        1,
        1
    ),
    (
        NULL,
        'Konklux',
        881.09,
        100,
        1,
        1
    ),
    (
        'The impressive quad camera has a lens for any occasion',
        'Zontrax',
        993.27,
        87,
        1,
        1
    ),
    (
        'fast charging battery will keep you snapping all day',
        'Domainer',
        621.97,
        61,
        1,
        1
    ),
    (
        'Get nationwide coverage™ on Americas largest and most dependable networks with Straight Talk.',
        'Opela',
        287.70,
        117,
        1,
        1
    ),
    (
        'Vloggers and influencers rejoice',
        'Flowdesk',
        588.51,
        20,
        3,
        2
    ),
    (
        'a purpose-built compact camera blending the proven imaging capabilities of the RX100-series platform',
        'Overhold',
        1022.46,
        13,
        3,
        2
    ),
    (
        'With an updated physical design for more efficient content creation.',
        'Toughjoyfax',
        869.42,
        21,
        3,
        2
    ),
    (
        'Compact, intuitive and oh-so-easy to use',
        'Asoka',
        878.44,
        98,
        3,
        2
    ),
    (
        'For drivers who love new adventures while traveling',
        'DriveSmart 71',
        259.68,
        47,
        12,
        3
    ),
    (
        'Featuring simple menus and easy-to-read map',
        'Y-find',
        212.55,
        120,
        12,
        3
    ),
    (
        'Traffic and map updates are included along with helpful driver alerts to encourage safer driving.',
        'Tresom',
        45.91,
        52,
        12,
        3
    ),
    (
        'This Refurbished Dell Latitude E7270 Laptop is a prime example of big things come in small packages!',
        'Latitude E7270',
        447.17,
        59,
        2,
        4
    ),
    (
        'You will be able to stay up to date with your work, or just surf the web on the go!',
        'Alphazap',
        737.30,
        64,
        2,
        4
    ),
    (
        'With its small size, it can fit virtually anywhere that it is needed.',
        'Solarbreeze',
        882.19,
        55,
        2,
        4
    ),
    (
        'This Laptop will be perfect for any home or office.',
        'Sub-Ex',
        439.26,
        38,
        2,
        4
    ),
    (
        'This PC is powered by an Intel Core i5-6300U 6th Gen Processor.',
        'Tres-Zap',
        420.73,
        112,
        2,
        4
    ),
    (
        'Ultimate Steam Iron (Dark Blue) steam iron delivers a powerful ironing experience',
        'Namfix',
        683.14,
        47,
        4,
        5
    ),
    (
        'This high-performance iron puts professional wrinkle and crease removal at your fingertips.',
        'Bitwolf',
        1038.59,
        102,
        4,
        5
    ),
    (
        'An extra-powerful 150-gram steam boost ensures high performance.',
        'IronMax3',
        242.62,
        81,
        4,
        5
    ),
    (
        'Patented Microsteam400 stainless steel soleplate technology creates perfect steam coverage through its 400 active micro-steam holes.',
        'IronSDLight',
        438.93,
        88,
        4,
        5
    ),
    (
        'An XL 12.7 oz water tank, a precision tip for hard to reach areas',
        'Iron XL 12 7',
        333.97,
        104,
        4,
        5
    ),
    (
        'Professional quality ironing results and the ultimate ironing tool.',
        'MaxSteam',
        744.70,
        54,
        4,
        5
    ),
    (
        'GE Appliances provide up-to-date technology and exceptional quality to simplify the way you live.',
        'RonstringGE',
        871.94,
        61,
        6,
        6
    ),
    (
        'Cool your home from anywhere with ThinQ app.',
        'Keylex',
        449.52,
        48,
        6,
        6
    ),
    (
        'Voice control with Alexa and Google Assistant make changing settings a breeze.',
        'Matsoft',
        637.19,
        93,
        6,
        6
    ),
    (
        'With 10,000 BTUs this unit will save you energy and money while cooling a room.',
        'Daltfresh',
        139.19,
        106,
        6,
        6
    ),
    (
        'Weve got you covered with Auto Restart',
        'ToughJoyAir',
        999.83,
        20,
        6,
        6
    ),
    (
        'Top Load Washer, Washer Capacity 4.0 cu ft, Power Source Electric',
        'WasherCleanMS',
        224.45,
        32,
        7,
        7
    ),
    (
        'Our full automatic laundry washing machine only needs a small space for store',
        'Prodder',
        972.54,
        89,
        7,
        7
    ),
    (
        'This machine features a built in drain Aluminum pump',
        'CycleLife',
        107.82,
        60,
        7,
        7
    ),
    (
        'You can stop wasting hours keeping an eye on washing machine for its full automatic cleaning mode.',
        'VoltSteam',
        398.62,
        109,
        7,
        7
    ),
    (
        ' It has three water levels: L/16L M/23L H/30L, and you can choose a suitable level according to the amount of clothes you need to wash',
        'Zathin++',
        1131.95,
        87,
        7,
        7
    ),
    (
        'Do not hesitate to buy one',
        'Cardguard SuperClean',
        1063.16,
        82,
        7,
        7
    );

INSERT INTO
    orders (created_at, customer_id)
VALUES
    ('2018-11-14 15:57:42.000000', 31),
    ('2020-04-01 13:41:55.000000', 2),
    ('2019-08-25 19:46:17.000000', 24),
    ('2021-01-06 08:01:51.000000', 31),
    ('2018-03-19 01:18:58.000000', 25),
    ('2018-04-13 07:44:15.000000', 28),
    ('2020-03-11 18:44:54.000000', 11),
    ('2020-07-24 21:43:12.000000', 9),
    ('2021-11-20 20:39:32.000000', 30),
    ('2020-04-05 02:29:03.000000', 1),
    ('2025-01-02 05:25:10.000000', 28),
    ('2025-01-31 00:14:14.000000', 4),
    ('2019-03-19 04:25:14.000000', 6),
    ('2025-01-11 16:53:54.000000', 29),
    ('2019-06-10 12:14:49.000000', 2),
    ('2020-06-26 07:55:46.000000', 35),
    ('2021-07-28 21:49:31.000000', 10),
    ('2018-07-29 05:05:43.000000', 21),
    ('2021-01-31 07:57:53.000000', 15),
    ('2020-12-24 10:32:02.000000', 14),
    ('2018-02-16 06:11:45.000000', 10),
    ('2025-01-27 02:22:22.000000', 26),
    ('2018-04-08 07:04:21.000000', 9),
    ('2021-10-24 06:24:57.000000', 31),
    ('2018-02-04 20:34:33.000000', 29),
    ('2019-06-28 14:16:55.000000', 32),
    ('2020-11-03 11:52:53.000000', 10),
    ('2019-07-29 18:17:27.000000', 17),
    ('2018-11-25 11:03:30.000000', 14),
    ('2021-01-23 19:13:47.000000', 5),
    ('2020-04-17 05:05:44.000000', 8),
    ('2025-01-27 05:19:24.000000', 26),
    ('2020-07-13 18:13:45.000000', 18),
    ('2021-06-30 18:40:57.000000', 28),
    ('2018-08-10 05:51:38.000000', 2),
    ('2019-01-10 12:58:41.000000', 35),
    ('2021-06-30 15:13:26.000000', 22),
    ('2025-01-03 04:34:50.000000', 31),
    ('2020-03-14 03:51:51.000000', 24),
    ('2025-01-05 13:44:40.000000', 27),
    ('2020-10-25 15:48:46.000000', 33),
    ('2020-07-09 05:22:41.000000', 18),
    ('2025-01-05 17:16:52.000000', 27),
    ('2025-01-06 01:44:47.000000', 16),
    ('2020-03-23 22:19:58.000000', 17),
    ('2019-01-29 17:58:56.000000', 12),
    ('2025-01-28 18:29:36.000000', 15),
    ('2022-01-04 07:22:49.000000', 18),
    ('2019-09-30 02:05:50.000000', 13),
    ('2025-01-11 14:34:20.000000', 5);

INSERT INTO
    reviews (customer_id, item_id, created_at, rating)
VALUES
    (
        1,
        1,
        '2021-10-12 12:30:00.000000',
        3.2
    ),
    (
        2,
        4,
        '2019-10-02 14:32:00.000000',
        4.6
    ),
    (
        3,
        4,
        '2020-12-12 18:34:00.000000',
        4.5
    ),
    (
        4,
        6,
        '2019-03-12 14:12:00.000000',
        2.7
    ),
    (
        5,
        6,
        '2019-01-26 21:13:00.000000',
        3
    ),
    (
        6,
        6,
        '2018-11-02 12:43:00.000000',
        4.8
    ),
    (
        7,
        7,
        '2017-10-11 02:14:00.000000',
        4.4
    ),
    (
        8,
        1,
        '2018-11-12 22:24:00.000000',
        4.9
    ),
    (
        9,
        1,
        '2019-02-11 21:33:00.000000',
        2.2
    ),
    (
        10,
        6,
        '2021-03-17 19:12:00.000000',
        1.6
    ),
    (
        11,
        6,
        '2017-11-10 12:11:00.000000',
        4.6
    ),
    (
        12,
        10,
        '2019-12-11 13:14:00.000000',
        4.7
    ),
    (
        13,
        1,
        '2020-10-12 23:12:00.000000',
        4.8
    ),
    (
        14,
        2,
        '2018-12-13 10:21:00.000000',
        3.2
    ),
    (
        15,
        1,
        '2021-12-23 07:41:00.000000',
        2.4
    ),
    (
        16,
        10,
        '2018-03-30 00:12:00.000000',
        4.4
    ),
    (
        17,
        11,
        '2021-03-05 19:28:00.000000',
        3.2
    ),
    (
        18,
        9,
        '2019-06-05 13:51:00.000000',
        2.4
    ),
    (
        19,
        9,
        '2019-05-25 16:56:00.000000',
        4.8
    ),
    (
        20,
        20,
        '2019-09-27 20:19:00.000000',
        3.3
    ),
    (
        21,
        5,
        '2019-08-29 16:21:00.000000',
        4.2
    ),
    (
        22,
        4,
        '2019-06-22 16:15:00.000000',
        2.1
    ),
    (
        23,
        20,
        '2018-12-29 20:37:00.000000',
        4.8
    ),
    (
        24,
        20,
        '2019-01-23 22:34:00.000000',
        4.9
    ),
    (
        24,
        1,
        '2018-10-12 11:37:00.000000',
        4.8
    ),
    (
        24,
        3,
        '2018-07-27 23:49:00.000000',
        4.7
    ),
    (
        27,
        1,
        '2021-04-29 04:01:00.000000',
        4.4
    ),
    (
        27,
        10,
        '2019-07-23 21:25:00.000000',
        4.3
    ),
    (
        27,
        5,
        '2021-03-28 06:18:00.000000',
        4.7
    ),
    (
        30,
        22,
        '2019-10-01 15:07:00.000000',
        4.6
    );

INSERT INTO
    orders_items (order_id, item_id, quantity)
VALUES
    (1, 3, 2),
    (1, 23, 1),
    (1, 35, 3),
    (1, 45, 2),
    (1, 52, 1),
    (2, 3, 2),
    (2, 12, 2),
    (2, 26, 3),
    (2, 51, 1),
    (2, 60, 1),
    (3, 1, 1),
    (3, 16, 2),
    (3, 36, 3),
    (3, 42, 2),
    (3, 45, 1),
    (4, 18, 1),
    (4, 20, 1),
    (4, 26, 1),
    (4, 41, 1),
    (4, 55, 1),
    (5, 14, 1),
    (5, 21, 1),
    (5, 22, 1),
    (5, 27, 1),
    (5, 45, 1),
    (6, 21, 2),
    (6, 27, 3),
    (6, 33, 1),
    (6, 36, 1),
    (6, 41, 1),
    (7, 5, 1),
    (7, 11, 2),
    (7, 17, 1),
    (7, 28, 1),
    (7, 33, 1),
    (8, 13, 1),
    (8, 18, 1),
    (8, 59, 1),
    (8, 61, 1),
    (8, 63, 1),
    (9, 17, 1),
    (9, 22, 3),
    (9, 30, 2),
    (9, 33, 1),
    (9, 43, 2),
    (10, 1, 1),
    (10, 5, 1),
    (10, 47, 1),
    (10, 59, 1),
    (10, 62, 1),
    (11, 17, 1),
    (11, 49, 1),
    (12, 9, 1),
    (12, 28, 1),
    (13, 11, 1),
    (13, 41, 1),
    (14, 40, 1),
    (14, 53, 1),
    (15, 34, 1),
    (15, 47, 1),
    (16, 14, 1),
    (16, 17, 1),
    (17, 21, 1),
    (17, 59, 2),
    (18, 12, 2),
    (18, 63, 2),
    (19, 41, 2),
    (19, 43, 1),
    (20, 30, 2),
    (20, 54, 1),
    (21, 39, 1),
    (21, 53, 2),
    (21, 58, 1),
    (22, 1, 1),
    (22, 32, 1),
    (22, 34, 1),
    (23, 13, 1),
    (23, 28, 1),
    (23, 31, 1),
    (24, 2, 1),
    (24, 29, 2),
    (24, 59, 2),
    (25, 5, 2),
    (25, 10, 2),
    (25, 17, 2),
    (26, 2, 3),
    (26, 4, 3),
    (26, 27, 3),
    (27, 34, 3),
    (27, 39, 4),
    (27, 46, 4),
    (28, 10, 4),
    (28, 24, 4),
    (28, 53, 1),
    (29, 1, 1),
    (29, 17, 1),
    (29, 33, 1),
    (30, 23, 1),
    (30, 37, 1),
    (30, 38, 1),
    (31, 9, 1),
    (31, 24, 1),
    (31, 46, 1),
    (31, 54, 1),
    (31, 58, 1),
    (32, 12, 1),
    (32, 25, 1),
    (32, 29, 1),
    (32, 46, 1),
    (32, 52, 1),
    (33, 18, 1),
    (33, 24, 1),
    (33, 26, 1),
    (33, 29, 1),
    (33, 36, 1),
    (34, 21, 1),
    (34, 26, 1),
    (34, 27, 1),
    (34, 39, 2),
    (34, 57, 2),
    (35, 8, 2),
    (35, 34, 2),
    (35, 35, 2),
    (35, 58, 2),
    (35, 61, 2),
    (36, 7, 1),
    (36, 9, 1),
    (36, 28, 1),
    (36, 43, 1),
    (36, 48, 1),
    (37, 8, 1),
    (37, 22, 1),
    (37, 40, 1),
    (37, 45, 1),
    (37, 48, 1),
    (38, 21, 1),
    (38, 33, 1),
    (38, 35, 1),
    (38, 42, 2),
    (38, 53, 2),
    (39, 5, 2),
    (39, 26, 2),
    (39, 31, 2),
    (39, 35, 2),
    (39, 43, 3),
    (40, 4, 3),
    (40, 8, 3),
    (40, 34, 3),
    (40, 46, 1),
    (40, 55, 1),
    (41, 4, 1),
    (42, 5, 1),
    (43, 41, 1),
    (44, 21, 1),
    (45, 60, 1),
    (46, 32, 1),
    (47, 23, 1),
    (48, 42, 1),
    (49, 24, 1),
    (50, 11, 1);