declare module 'excel4node' {
    interface OptsWorkbook {
        jszip: Jszip;
        defaultFont: DefaultFont;
        dataFormat: string;
        workbookView: WorkbookView | boolean;
        logger: {};
        author: string;
    }

    interface Jszip {
        compression: string;
    }

    interface DefaultFont {
        color: HEX;
        name: string;
        size: number | 12;
        family: string;
    }

    interface WorkbookView {
        activeTab: number;
        autoFilterDateGrouping: boolean;
        firstSheet: number;
        minimized: boolean;
        showHorizontalScroll: boolean;
        showSheetTabs: boolean;
        showVerticalScroll: boolean;
        tabRatio: number;
        visibility: string;
        windowHeight: number;
        windowWidth: number;
        xWindow: number;
        yWindow: number;
    }

    type HEX = `#${string}`;

    class Workbook {
        constructor(opt?: OptsWorkbook)

        writeToBuffer(): Promise<Buffer>;

        addWorksheet(name: string, opts?: OptsWorkbook): Worksheet;
    }

    interface OptsWorksheet {
        margins: Margins;
        printOptions: PrintOptions;
        headerFooter: HeaderFooter | string;
        pageSetup:PageSetup;
        sheetView:SheetView;
        sheetFormat:SheetFormat;
        sheetProtection:SheetProtection;
        outline:Outline;
        disableRowSpansOptimization:boolean;
        hidden:boolean;
    }

    interface Outline{
        summaryBelow:boolean;
        summaryRight:boolean;
    }

    interface SheetProtection{
        autoFilter:boolean;
        deleteColumns:boolean;
        deleteRows:boolean;
        formatCells:boolean;
        formatColumns:boolean;
        formatRows:boolean;
        insertColumns:boolean;
        insertHyperlinks:boolean;
        insertRows:boolean;
        objects:boolean;
        password:string;
        pivotTables:boolean;
        scenarios:boolean;
        selectLockedCells:boolean;
        selectUnlockedCells:boolean;
        sheet:boolean;
        sort:boolean;
    }

    interface SheetFormat{
        baseColWidth:number;
        defaultColWidth:number;
        defaultRowHeight:number;
        thickBottom:boolean;
        thickTop:boolean;
    }

    interface SheetView{
        pane:SheetViewPane;
        rightToLeft:boolean;
        showGridLines:boolean;
        zoomScale:number;
        zoomScaleNormal:number;
        zoomScalePageLayoutView:number;
    }

    interface SheetViewPane{
       activePane:'bottomLeft'| 'bottomRight'| 'topLeft'| 'topRight';
        state:'split'| 'frozen'| 'frozenSplit';
        topLeftCell:string;
        xSplit:string;
        ySplit:string;
    }

    interface PageSetup{
        blackAndWhite:boolean;
        cellComments: 'none' | 'asDisplayed' | 'atEnd';
        copies:string;
        draft :boolean
        firstPageNumber:number;
        errors:'displayed'| 'blank'| 'dash'| 'NA';
        fitToHeight:number;
        fitToWidth:number;
        horizontalDpi:number;
        orientation:'default'| 'portrait'| 'landscape';
        pageOrder:'downThenOver'| 'overThenDown';
        paperHeight :string;
        paperSize:string;
        paperWidth:string;
        scale:number;
        useFirstPageNumber:boolean;
        usePrinterDefaults:boolean;
        verticalDpi:number;
    }

    interface HeaderFooter {
       evenFooter:string;
        evenHeader:string;
        firstFooter:string;
        firstHeader:string;
        oddFooter:string;
        oddHeader:string;
        alignWithMargins:boolean;
        differentFirst:boolean;
        differentOddEven:boolean;
        scaleWithDoc:boolean;
    }

    interface PrintOptions {
        centerHorizontal: boolean;
        centerVertical: boolean;
        printGridLines: boolean;
        printHeadings: boolean;
    }

    interface Margins {
        bottom: number;
        footer: number;
        header: number;
        left: number;
        right: number;
        top: number;
    }

    class Worksheet {
        constructor(wb: Workbook, name: string, opts?: OptsWorksheet);
        get columnCount():number;
        get rowCount():number;
        get cell():any;
    }
}