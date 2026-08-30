export const CATEGORIES = [
  // 1. Cocktails & Drinks First
  { id: "cocktail-jug", name: "ស្រាក្រឡុក 1ថូ", nameEn: "Cocktail Pitcher" },
  { id: "cocktail-glass", name: "Cocktail", nameEn: "Cocktail Glass" },
  { id: "shots", name: "Shots", nameEn: "Shots" },
  { id: "beer", name: "ប៊ីយ៉ែរ", nameEn: "Beer" },
  { id: "soft-drink", name: "ភេសជ្ជៈ", nameEn: "Soft Drinks" },

  // 2. Meat Items
  { id: "beef", name: "សាច់គោ", nameEn: "Beef" },
  { id: "chicken", name: "សាច់មាន់", nameEn: "Chicken" },
  { id: "pork-intestine", name: "ពោះតាន់", nameEn: "Pork Intestine" },
  { id: "ox-tongue", name: "អណ្តាតគោ", nameEn: "Ox Tongue" },
  { id: "dried-meat", name: "ងៀត", nameEn: "Dried / Grilled Snacks" },

  // 3. Seafood & Other Protein
  { id: "fish", name: "ត្រី", nameEn: "Fish" },
  { id: "fish-fin", name: "ព្រុយត្រី", nameEn: "Fish Fin" },
  { id: "shrimp", name: "បង្គា", nameEn: "Shrimp" },
  { id: "squid", name: "មឹក", nameEn: "Squid" },
  { id: "clam", name: "ងាវ", nameEn: "Clams" },
  { id: "frog", name: "កង្កែប", nameEn: "Frog" },
  { id: "eel", name: "អន្ទង់", nameEn: "Eel" },

  // 4. Rice, Noodles, Salad & Sides
  { id: "rice-noodle", name: "បាយ និង មី", nameEn: "Rice & Noodles" },
  { id: "salad", name: "ញ៉ាំ", nameEn: "Salad" },
  { id: "vegetable", name: "ឆាបន្លែ", nameEn: "Stir-fried Vegetables" },
  { id: "fried", name: "បំពង", nameEn: "Deep Fried" },
];

export const MENU = [
  // 1. ស្រាក្រឡុក 1ថូ (category: "cocktail-jug")
  { id: "92", name: "រសជាតិ Strawberry 1ថូ", price: 7.00, category: "cocktail-jug", image: "/images/menu/92.webp" },
  { id: "93", name: "ស្រាក្រឡុករសជាតិ Blueberry 1ថូ", price: 7.00, category: "cocktail-jug", image: "/images/menu/93.webp" },
  { id: "94", name: "ស្រាក្រឡុករសជាតិ Peach 1ថូ", price: 7.00, category: "cocktail-jug", image: "/images/menu/94.webp" },
  { id: "95", name: "ស្រាក្រឡុករសជាតិ Passion 1ថូ", price: 7.00, category: "cocktail-jug", image: "/images/menu/95.webp" },
  { id: "96", name: "ស្រាក្រឡុករសជាតិ Kiwi 1ថូ", price: 7.00, category: "cocktail-jug", image: "/images/menu/96.webp" },
  { id: "97", name: "ស្រាក្រឡុករសជាតិ Melon 1ថូ", price: 7.00, category: "cocktail-jug", image: "/images/menu/97.webp" },
  { id: "98", name: "ស្រាក្រឡុករសជាតិ Blue Margarita 1ថូ", price: 7.00, category: "cocktail-jug", image: "/images/menu/98.webp" },

  // 2. Cocktail Glass (category: "cocktail-glass")
  { id: "110", name: "Blue Margarita", price: 3.00, category: "cocktail-glass", image: "/images/menu/110.webp" },
  { id: "111", name: "Passion Margarita", price: 3.00, category: "cocktail-glass", image: "/images/menu/111.webp" },
  { id: "112", name: "Strawberry Margarita", price: 3.00, category: "cocktail-glass", image: "/images/menu/112.webp" },
  { id: "113", name: "Peach Margarita", price: 3.00, category: "cocktail-glass", image: "/images/menu/113.webp" },
  { id: "114", name: "Kiwi Margarita", price: 3.00, category: "cocktail-glass", image: "/images/menu/114.webp" },
  { id: "115", name: "Melon Margarita", price: 3.00, category: "cocktail-glass", image: "/images/menu/115.webp" },
  { id: "116", name: "Blueberry Margarita", price: 3.00, category: "cocktail-glass", image: "/images/menu/116.webp" },

  // 3. Shots (category: "shots")
  { id: "99", name: "B52", price: 3.00, category: "shots", image: "/images/menu/99.webp" },

  // 4. ប៊ីយ៉ែរ (category: "beer")
  { id: "100", name: "ហនុមានដបស", price: 1.50, category: "beer", image: "/images/menu/100.webp" },
  { id: "101", name: "ហនុមានកំប៉ុងខៀវ", price: 1.00, category: "beer", image: "/images/menu/101.webp" },
  { id: "102", name: "ហនុមានកំប៉ុងខ្មៅ", price: 1.25, category: "beer", image: "/images/menu/102.webp" },
  { id: "103", name: "កម្ពុជាកំប៉ុងស", price: 0.75, category: "beer", image: "/images/menu/103.webp" },
  { id: "104", name: "កម្ពុជាដបស", price: 1.50, category: "beer", image: "/images/menu/104.webp" },
  { id: "105", name: "ថៃហ្គឺដបស", price: 1.50, category: "beer", image: "/images/menu/105.webp" },
  { id: "106", name: "ABC ស៊ីងហ្គាពួរ", price: 2.00, category: "beer", image: "/images/menu/106.webp" },

  // 5. ភេសជ្ជៈ (category: "soft-drink")
  { id: "107", name: "ទឹកសុទ្ធ", price: 0.25, category: "soft-drink", image: "/images/menu/107.webp" },
  { id: "108", name: "កូកា", price: 0.75, category: "soft-drink", image: "/images/menu/108.webp" },
  { id: "109", name: "ស្ទីង", price: 0.75, category: "soft-drink", image: "/images/menu/109.webp" },

  // 6. សាច់គោ (category: "beef")
  { id: "20", name: "សាច់គោបំពងល្ង", price: 4.00, category: "beef", image: "/images/menu/20.webp" },
  { id: "21", name: "សាច់គោឆាអង្ក្រងកញ្ឆែត", price: 4.00, category: "beef", image: "/images/menu/21.webp" },
  { id: "22", name: "សាច់គោឆាគ្រឿង", price: 4.00, category: "beef", image: "/images/menu/22.webp" },
  { id: "23", name: "ឡាបសាច់គោ", price: 4.00, category: "beef", image: "/images/menu/23.webp" },
  { id: "24", name: "ហាត់ណាទឹកភ្នែក", price: 4.00, category: "beef", image: "/images/menu/24.webp" },
  { id: "25", name: "សាច់គោបុកម្អម", price: 4.00, category: "beef", image: "/images/menu/25.webp" },
  { id: "26", name: "សាច់គោបុកសណ្ដែកគួរ", price: 4.00, category: "beef", image: "/images/menu/26.webp" },
  { id: "27", name: "ភ្លាសាច់គោ", price: 4.00, category: "beef", image: "/images/menu/27.webp" },
  { id: "28", name: "សាច់គោអប់អង្ក្រង", price: 4.00, category: "beef", image: "/images/menu/28.webp" },

  // 7. សាច់មាន់ (category: "chicken")
  { id: "8", name: "ជើងមាន់បំពងខ្ទឹមស", price: 4.00, category: "chicken", image: "/images/menu/8.webp" },
  { id: "9", name: "ជើងមាន់អាំងអំបិលម្ទេស", price: 4.00, category: "chicken", image: "/images/menu/9.webp" },
  { id: "10", name: "មាន់លីងចេកខ្ចី", price: 4.00, category: "chicken", image: "/images/menu/10.webp" },
  { id: "11", name: "ជើងមាន់លីងចេកខ្ចី", price: 4.00, category: "chicken", image: "/images/menu/11.webp" },
  { id: "12", name: "ជើងមាន់លីងអំបិលម្ទេស", price: 4.00, category: "chicken", image: "/images/menu/12.webp" },
  { id: "13", name: "មាន់លីងអំបិលម្ទេស", price: 4.00, category: "chicken", image: "/images/menu/13.webp" },
  { id: "14", name: "សរសៃកែងមាន់បំពងខ្ទឹមស", price: 4.00, category: "chicken", image: "/images/menu/14.webp" },

  // 8. ពោះតាន់ (category: "pork-intestine")
  { id: "62", name: "ពោះតាន់ឆាស្ពៃជូរ", price: 4.00, category: "pork-intestine", image: "/images/menu/62.webp" },
  { id: "63", name: "ពោះតាន់ឆាជូរអែម", price: 4.00, category: "pork-intestine", image: "/images/menu/63.webp" },
  { id: "64", name: "ពោះតាន់ឆាក្តៅ", price: 4.00, category: "pork-intestine", image: "/images/menu/64.webp" },
  { id: "65", name: "ពោះតាន់បំពងខ្ទឹមស", price: 4.00, category: "pork-intestine", image: "/images/menu/65.webp" },
  { id: "66", name: "ពោះតាន់ឆាអង្ក្រងកញ្ជែត", price: 4.00, category: "pork-intestine", image: "/images/menu/66.webp" },

  // 9. អណ្តាតគោ (category: "ox-tongue")
  { id: "58", name: "អណ្តាតគោបំពងស្លឹកក្រូច", price: 4.00, category: "ox-tongue", image: "/images/menu/58.webp" },
  { id: "59", name: "អណ្តាតគោឆាជូរអែម", price: 4.00, category: "ox-tongue", image: "/images/menu/59.webp" },
  { id: "60", name: "អណ្តាតគោអង្ក្រងកញ្ជែត", price: 4.00, category: "ox-tongue", image: "/images/menu/60.webp" },
  { id: "61", name: "អណ្តាតគោឆាងាំង៉ូវ", price: 4.00, category: "ox-tongue", image: "/images/menu/61.webp" },

  // 10. ងៀត (category: "dried-meat")
  { id: "81", name: "ងៀតគោអាំង", price: 4.00, category: "dried-meat", image: "/images/menu/81.webp" },
  { id: "82", name: "ងៀតក្របីអាំង", price: 4.00, category: "dried-meat", image: "/images/menu/82.webp" },
  { id: "83", name: "យ៉ាហ៊ឺអាំង", price: 4.00, category: "dried-meat", image: "/images/menu/83.webp" },
  { id: "84", name: "យ៉ាហុឺលីងពងទាប្រៃ", price: 4.00, category: "dried-meat", image: "/images/menu/84.webp" },
  { id: "85", name: "ពោតលីងពងទាប្រៃ", price: 4.00, category: "dried-meat", image: "/images/menu/85.webp" },
  { id: "86", name: "ពោតលីងបង្គាគ្រៀម", price: 4.00, category: "dried-meat", image: "/images/menu/86.webp" },

  // 11. ត្រី (category: "fish")
  { id: "67", name: "ត្រីក្រហមអប់មីសួរ", price: 6.00, category: "fish", image: "/images/menu/67.webp" },
  { id: "68", name: "ត្រីក្រហមចំហ៊ុយទឹកស៊ីអ៊ីវ", price: 6.00, category: "fish", image: "/images/menu/68.webp" },
  { id: "69", name: "ត្រីក្រហមចំហ៊ុយក្រូចឆ្មារ", price: 6.00, category: "fish", image: "/images/menu/69.webp" },
  { id: "70", name: "ត្រីក្រហមបំពងបុរាណ", price: 6.00, category: "fish", image: "/images/menu/70.webp" },
  { id: "71", name: "តុងយាំគ្រឿងសមុទ្រ", price: 6.00, category: "fish", image: "/images/menu/71.webp" },

  // 12. ព្រុយត្រី (category: "fish-fin")
  { id: "55", name: "ព្រុយត្រីសាលមុនអាំង", price: 4.00, category: "fish-fin", image: "/images/menu/55.webp" },
  { id: "56", name: "ព្រុយត្រីបំពងខ្ទឹមស", price: 4.00, category: "fish-fin", image: "/images/menu/56.webp" },
  { id: "57", name: "ព្រុយត្រីលីងអំបិលម្ទេស", price: 4.00, category: "fish-fin", image: "/images/menu/57.webp" },

  // 13. បង្គា (category: "shrimp")
  { id: "48", name: "បង្គាកោះកុង", price: 4.00, category: "shrimp", image: "/images/menu/48.webp" },
  { id: "49", name: "បង្គាអប់មីសួរ", price: 5.00, category: "shrimp", image: "/images/menu/49.webp" },
  { id: "50", name: "បង្គាបំពងខ្ទឹមស", price: 4.00, category: "shrimp", image: "/images/menu/50.webp" },
  { id: "51", name: "បង្គាអាំង", price: 4.00, category: "shrimp", image: "/images/menu/51.webp" },
  { id: "52", name: "ភ្លាបង្គាកន្ធំថេត", price: 4.00, category: "shrimp", image: "/images/menu/52.webp" },
  { id: "53", name: "បង្គាបំពងម្សៅ", price: 4.00, category: "shrimp", image: "/images/menu/53.webp" },
  { id: "54", name: "ស្ងោរជ្រក់បង្គា", price: 4.00, category: "shrimp", image: "/images/menu/54.webp" },

  // 14. មឹក (category: "squid")
  { id: "40", name: "មឹកឆាអំពិលទុំ", price: 4.00, category: "squid", image: "/images/menu/40.webp" },
  { id: "41", name: "មឹកឆាប្រៃផ្អែម", price: 4.00, category: "squid", image: "/images/menu/41.webp" },
  { id: "42", name: "មឹកបំពងខ្ទឹមស", price: 4.00, category: "squid", image: "/images/menu/42.webp" },
  { id: "43", name: "មឹកអាំង", price: 4.00, category: "squid", image: "/images/menu/43.webp" },
  { id: "44", name: "មឹកឆាជូរអែម", price: 4.00, category: "squid", image: "/images/menu/44.webp" },
  { id: "45", name: "មឹកលីងអំបិលម្ទេស", price: 4.00, category: "squid", image: "/images/menu/45.webp" },
  { id: "46", name: "មឹកឆាម្រេចខ្ចី", price: 4.00, category: "squid", image: "/images/menu/46.webp" },
  { id: "47", name: "ស្ងោរជ្រក់មឹក", price: 4.00, category: "squid", image: "/images/menu/47.webp" },

  // 15. ងាវ (category: "clam")
  { id: "35", name: "ងាវឆាអំពិលទុំ", price: 4.00, category: "clam", image: "/images/menu/35.webp" },
  { id: "36", name: "ងាវអប់អំបិលម្ទេស", price: 4.00, category: "clam", image: "/images/menu/36.webp" },
  { id: "37", name: "ងាវទឹកកក", price: 4.00, category: "clam", image: "/images/menu/37.webp" },
  { id: "38", name: "ងាវឆាម្រះព្រៅ", price: 4.00, category: "clam", image: "/images/menu/38.webp" },
  { id: "39", name: "ងាវស្រុះ", price: 4.00, category: "clam", image: "/images/menu/39.webp" },

  // 16. កង្កែប (category: "frog")
  { id: "15", name: "កង្កែបឆាក្ដៅ", price: 4.00, category: "frog", image: "/images/menu/15.webp" },
  { id: "16", name: "កង្កែបឆាគ្រឿង", price: 4.00, category: "frog", image: "/images/menu/16.webp" },
  { id: "17", name: "កង្កែបឆាង៉ាំង៉ូវ", price: 4.00, category: "frog", image: "/images/menu/17.webp" },
  { id: "18", name: "កង្កែបលីងចេកខ្ចី", price: 4.00, category: "frog", image: "/images/menu/18.webp" },
  { id: "19", name: "កង្កែបឆាម្ទេសជ្រក់", price: 4.00, category: "frog", image: "/images/menu/19.webp" },

  // 17. អន្ទង់ (category: "eel")
  { id: "29", name: "អន្ទង់ឆាក្ដៅ", price: 4.00, category: "eel", image: "/images/menu/29.webp" },
  { id: "30", name: "អន្ទង់ឆាគ្រឿង", price: 4.00, category: "eel", image: "/images/menu/30.webp" },
  { id: "31", name: "អន្ទង់អាំង", price: 4.00, category: "eel", image: "/images/menu/31.webp" },
  { id: "32", name: "អន្ទង់ឆាម្រេចជ្រក់", price: 4.00, category: "eel", image: "/images/menu/32.webp" },
  { id: "33", name: "អន្ទង់អប់ត្រយ៉ូងចេក", price: 5.00, category: "eel", image: "/images/menu/33.webp" },
  { id: "34", name: "អន្ទង់ឆាម្ទេសជ្រក់", price: 4.00, category: "eel", image: "/images/menu/34.webp" },

  // 18. បាយ និង មី (category: "rice-noodle")
  { id: "1", name: "បាយឆាសាច់គោ", price: 3.00, category: "rice-noodle", image: "/images/menu/1.webp" },
  { id: "2", name: "បាយឆាយ៉ាងចូវ", price: 4.00, category: "rice-noodle", image: "/images/menu/2.webp" },
  { id: "3", name: "បាយឆាគ្រឿងសមុទ្រ", price: 4.00, category: "rice-noodle", image: "/images/menu/3.webp" },
  { id: "4", name: "មីឆាសាច់គោ", price: 3.00, category: "rice-noodle", image: "/images/menu/4.webp" },
  { id: "5", name: "មីឆាគ្រឿងសមុទ្រ", price: 3.00, category: "rice-noodle", image: "/images/menu/5.webp" },
  { id: "6", name: "បាយឆាម្រះព្រៅសាច់គោ", price: 3.00, category: "rice-noodle", image: "/images/menu/6.webp" },
  { id: "7", name: "បាយលីងទឹកអំបិល", price: 3.00, category: "rice-noodle", image: "/images/menu/7.webp" },

  // 19. ញ៉ាំ (category: "salad")
  { id: "72", name: "ស្វាយញ៉ាំត្រីឆ្អើរ", price: 4.00, category: "salad", image: "/images/menu/72.webp" },
  { id: "73", name: "ញ៉ាំម្កាក់ត្រីឆ្អើរ", price: 4.00, category: "salad", image: "/images/menu/73.webp" },
  { id: "74", name: "ញ៉ាំមីសួរគ្រឿងសមុទ្រ", price: 4.00, category: "salad", image: "/images/menu/74.webp" },
  { id: "75", name: "គល់គ្រាវបង្គាគ្រាម", price: 4.00, category: "salad", image: "/images/menu/75.webp" },
  { id: "76", name: "ក្ដាមប្រៃ", price: 4.00, category: "salad", image: "/images/menu/76.webp" },

  // 20. ឆាបន្លែ (category: "vegetable")
  { id: "77", name: "ខាត់ណាប្រេងខ្យង", price: 3.00, category: "vegetable", image: "/images/menu/77.webp" },
  { id: "78", name: "ស្ពៃតឿឆាប្រេងខ្យង", price: 3.00, category: "vegetable", image: "/images/menu/78.webp" },
  { id: "79", name: "ខាត់ណាពិសេស", price: 4.00, category: "vegetable", image: "/images/menu/79.webp" },
  { id: "80", name: "ឆាបន្លែគ្រប់មុខ", price: 4.00, category: "vegetable", image: "/images/menu/80.webp" },
  { id: "117", name: "ខាត់ណាទឺកភ្នែក", price: 4.00, category: "vegetable", image: "/images/menu/117.webp" },
  { id: "118", name: "សម្រស់KOKO", price: 7.00, category: "vegetable", image: "/images/menu/118.webp" },

  // 21. បំពង (category: "fried")
  { id: "87", name: "ត្រាវបំពង", price: 3.00, category: "fried", image: "/images/menu/87.webp" },
  { id: "88", name: "ដំឡូងបំពង", price: 3.00, category: "fried", image: "/images/menu/88.webp" },
  { id: "89", name: "កូននាង", price: 4.00, category: "fried", image: "/images/menu/89.webp" },
  { id: "90", name: "ប្រហិតក្រឡុក", price: 3.00, category: "fried", image: "/images/menu/90.webp" },
  { id: "91", name: "ស្វាយក្រឡុក", price: 3.00, category: "fried", image: "/images/menu/91.webp" },
];