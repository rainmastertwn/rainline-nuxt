type CatalogItem = {
  title: string
  imgUrl: string
  fileUrl: string
}

import rl1005 from '~/assets/images/download/RL-1005.webp'
import rl1010 from '~/assets/images/download/RL-1010.webp'
import rl1010l from '~/assets/images/download/RL-1010L.webp'
import rl1015 from '~/assets/images/download/RL-1015.webp'
import rl1020 from '~/assets/images/download/RL-1020.webp'
import rl1515 from '~/assets/images/download/RL-1515.webp'
import rl1005PDF from '/file/rainline_1005.pdf'
import rl1010PDF from '/file/rainline_1010.pdf'
import rl1010lPDF from '/file/rainline_1010L.pdf'
import rl1015PDF from '/file/rainline_1015.pdf'
import rl1020PDF from '/file/rainline_1020.pdf'
import rl1515PDF from '/file/rainline_1515.pdf'

export const rlCatalog: CatalogItem[] = [
  {
    title: 'RL-1005 PP截水溝',
    imgUrl: rl1005,
    fileUrl: rl1005PDF
  },
  {
    title: 'RL-1010 PP截水溝',
    imgUrl: rl1010,
    fileUrl: rl1010PDF
  },
  {
    title: 'RL-1010L PP截水溝',
    imgUrl: rl1010l,
    fileUrl: rl1010lPDF
  },
  {
    title: 'RL-1015 PP截水溝',
    imgUrl: rl1015,
    fileUrl: rl1015PDF
  },
  {
    title: 'RL-1020 PP截水溝',
    imgUrl: rl1020,
    fileUrl: rl1020PDF
  },
  {
    title: 'RL-1515 PP截水溝',
    imgUrl: rl1515,
    fileUrl: rl1515PDF
  }
]

import rp25 from '~/assets/images/download/RP-25.webp'
import rp30 from '~/assets/images/download/RP-30.webp'
import rp35 from '~/assets/images/download/RP-35.webp'
import rp35h from '~/assets/images/download/RP-35h.webp'
import rp46 from '~/assets/images/download/RP-46.webp'
import rp56 from '~/assets/images/download/RP-56.webp'
import rp71 from '~/assets/images/download/RP-71.webp'
import rp25PDF from '/file/rainpit_25.pdf'
import rp30PDF from '/file/rainpit_30.pdf'
import rp35PDF from '/file/rainpit_35.pdf'
import rp35hPDF from '/file/rainpit_35h.pdf'
import rp46PDF from '/file/rainpit_46.pdf'
import rp56PDF from '/file/rainpit_56.pdf'
import rp71PDF from '/file/rainpit_71.pdf'

export const rpCatalog: CatalogItem[] = [
  {
    title: 'RP-25 PP集水陰井',
    fileUrl: rp25PDF,
    imgUrl: rp25
  },
  {
    title: 'RP-30 PP滲透陰井',
    fileUrl: rp30PDF,
    imgUrl: rp30
  },
  {
    title: 'RP-35 PP草皮陰井',
    fileUrl: rp35PDF,
    imgUrl: rp35
  },
  {
    title: 'RP-35h 草地陰井',
    fileUrl: rp35hPDF,
    imgUrl: rp35h
  },
  {
    title: 'RP-46 聚丙烯陰井',
    fileUrl: rp46PDF,
    imgUrl: rp46
  },
  {
    title: 'RP-56 輕質水利陰井',
    fileUrl: rp56PDF,
    imgUrl: rp56
  },
  {
    title: 'RP-71 輕質塑膠陰井',
    fileUrl: rp71PDF,
    imgUrl: rp71
  }
]

import Doc02601V50 from '~/assets/images/download/doc_02601_V50.webp'
import Doc02601V2010 from '~/assets/images/download/doc_02601_V2010.07.webp'
import Doc02601V2011 from '~/assets/images/download/doc_02601_V2011.04.webp'
import Doc0260520121023 from '~/assets/images/download/doc_02605_20121023.webp'
import Doc02601V50PDF from '/file/02601_V50.pdf'
import Doc02601V2010PDF from '/file/02601_V2010.07.pdf'
import Doc02601V2011PDF from '/file/02601_V2011.04.pdf'
import Doc0260520121023PDF from '/file/02605_20121023.pdf'

export const docCatalog: CatalogItem[] = [
  {
    title: '02601排水管溝V2011.04.11',
    fileUrl: Doc02601V2011PDF,
    imgUrl: Doc02601V2011
  },
  {
    title: '02601排水管溝V2010.07',
    fileUrl: Doc02601V2010PDF,
    imgUrl: Doc02601V2010
  },
  {
    title: '02601v50',
    fileUrl: Doc02601V50PDF,
    imgUrl: Doc02601V50
  },
  {
    title: '02605 景觀回水溝-20121023',
    fileUrl: Doc0260520121023PDF,
    imgUrl: Doc0260520121023
  }
]

import otherDwg from '~/assets/images/download/other_dwg_01.webp'
import otherPdf01 from '~/assets/images/download/other_pdf_01.webp'
import otherPdf02 from '~/assets/images/download/other_pdf_02.webp'
import otherXlsx01 from '~/assets/images/download/other_xlsx_01.webp'
import otherDwgFile from '/file/2025_rainline_dwg.dwg'
import otherXlsxFile from '/file/2025_rainline_xlsx.xls'
import otherPdf01File from '/file/2025_rainline_pdf.pdf'

export const otherCatalog: CatalogItem[] = [
  {
    title: '2024 雨水管理大師_10型PP截水溝(圖說dwg)',
    fileUrl: otherDwgFile,
    imgUrl: otherDwg
  },
  {
    title: '2024 雨水管理大師_10型PP截水溝(預算xlsx)',
    fileUrl: otherXlsxFile,
    imgUrl: otherXlsx01
  },
  {
    title: '2024 雨水管理大師_10型PP截水溝(圖說pdf)',
    fileUrl: otherPdf01File,
    imgUrl: otherPdf01
  },
  {
    title: '2024 雨水管理大師_10型PP截水溝(預算pdf)',
    fileUrl: '#',
    imgUrl: otherPdf02
  }
]
