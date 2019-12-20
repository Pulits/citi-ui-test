(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-mensajes-mensajes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/mensajes/mensajes.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/mensajes/mensajes.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <strong>Búsqueda de mensajes</strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-6 col-xl mb-6 mb-xl-0\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Fecha Inicial</label>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"aaaa-mm-dd\" name=\"dp\" [(ngModel)]=\"model\"\r\n                                ngbDatepicker #dpStart=\"ngbDatepicker\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-secondary\" (click)=\"dpStart.toggle()\" type=\"button\"><i\r\n                                        class=\"icon-calendar\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Clave de rastreo</label>\r\n                        <input type=\"text\" [(ngModel)]=\"trackingKey\" class=\"form-control\" id=\"date\" placeholder=\"ej: 192812891\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Cuenta del ordenante</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"date\" placeholder=\"ej: 192812891\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" [hidden]=\"amountSwitch\">Monto de depósito. Desde:</label>\r\n                        <label for=\"\" [hidden]=\"!amountSwitch\">Monto de depósito:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"date\" placeholder=\"ej: $100.00\">\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"col-6 col-xl mb-6 mb-xl-0\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Fecha Final</label>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"aaaa-mm-dd\" name=\"dp\" [(ngModel)]=\"model\"\r\n                                ngbDatepicker #dpEnd=\"ngbDatepicker\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-secondary\" (click)=\"dpEnd.toggle()\" type=\"button\"><i\r\n                                        class=\"icon-calendar\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">RFC o CURP</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"date\" placeholder=\"192812891\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Cuenta del beneficiario</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"date\" placeholder=\"ej: 192812891\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [hidden]=\"amountSwitch\">\r\n                        <label for=\"\">Monto de depósito. Hasta:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"date\" placeholder=\"ej: $192,812,891.00\">\r\n                    </div>\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-xl mb-12 mb-xl-0 d-flex h-100 \">\r\n\r\n                    <label class=\"switch switch-3d switch-primary\">\r\n                        <input type=\"checkbox\" class=\"switch-input\" checked (change)=\"changeSwitchAmount()\">\r\n                        <span class=\"switch-slider\"></span>\r\n                    </label>\r\n                    &nbsp;&nbsp;&nbsp;\r\n\r\n                    <label for=\"\" [hidden]=\"amountSwitch\">Monto de depósito por rango</label>\r\n                    <label for=\"\" [hidden]=\"!amountSwitch\">Monto de depósito fijo</label>\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row align-items-center text-right\">\r\n                <div class=\"col-12 col-xl mb-12 mb-xl-0\">\r\n                    <button type=\"button\" class=\"btn btn-primary\"\r\n                        (click)=\" searchCDABtn()\">Buscar</button>\r\n\r\n<!--                         <button type=\"button\" class=\"btn btn-primary\"\r\n                        (click)=\"isCollapsedMain = !isCollapsedMain; searchCDABtn()\">Buscar</button> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <div class=\"card card-accent-primary\">\r\n                <div class=\"card-header\">\r\n                    <strong>Resultados</strong>\r\n                </div>\r\n                <div class=\"card-body\" (collapsed)=\"collapsedMain($event)\" (expanded)=\"expandedMain($event)\"\r\n                    [collapse]=\"isCollapsedMain\">\r\n                    <div class=\"col-md-12 mb-12\">\r\n                        <!-- Nav tabs -->\r\n\r\n\r\n                        <div class=\"row\">\r\n\r\n                            <div class=\"col-md-12 mb-12\">\r\n                                <div class=\"animated fadeIn\">\r\n                                    <div class=\"card\">\r\n                                        <div class=\"card-header\">\r\n                                            Datos Generales\r\n                                            <button type=\"button\" class=\"btn btn-primary sm pull-right\"\r\n                                                (click)=\"isCollapsed1 = !isCollapsed1\"><i id=\"datos-generales-chevron\"\r\n                                                    class=\"fa fa-chevron-down\" [hidden]=\"ColapseDG\"></i>\r\n                                                <i id=\"datos-generales-chevron\" class=\"fa fa-chevron-right\"\r\n                                                    [hidden]=\"!ColapseDG\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"card-body\" (collapsed)=\"collapsed1($event)\"\r\n                                            (expanded)=\"expanded1($event)\" [collapse]=\"isCollapsed1\">\r\n                                            <dl class=\"row\">\r\n                                                <dt class=\"col-sm-3\">Tipo de Cuenta</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.ordererAccountType}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Cuenta</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.orderingAccount}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">RFC o CURP</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.rfcOrCurpPayer}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Nombre</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.orderingName}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Apellido Paterno</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.orderingName}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Apellido Materno</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.orderingName}}</dd>\r\n                                            </dl>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n\r\n\r\n                            <div class=\"col-md-12 mb-12\">\r\n                                <div class=\"animated fadeIn\">\r\n                                    <div class=\"card\">\r\n                                        <div class=\"card-header\">\r\n                                            Datos del Ordenante\r\n                                            <button type=\"button\" class=\"btn btn-primary sm pull-right\"\r\n                                                (click)=\"isCollapsed2 = !isCollapsed2\"><i id=\"datos-generales-chevron\"\r\n                                                    class=\"fa fa-chevron-down\" [hidden]=\"ColapseDO\"></i>\r\n                                                <i id=\"datos-generales-chevron\" class=\"fa fa-chevron-right\"\r\n                                                    [hidden]=\"!ColapseDO\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"card-body\" (collapsed)=\"collapsed2($event)\"\r\n                                            (expanded)=\"expanded2($event)\" [collapse]=\"isCollapsed2\">\r\n                                            <dl class=\"row\">\r\n                                                <dt class=\"col-sm-3\">Tipo de Cuenta</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.ordererAccountType}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Cuenta</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.orderingAccount}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">RFC o CURP</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.rfcOrCurpPayer}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Nombre</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.orderingName}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Apellido Paterno</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.orderingName}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Apellido Materno</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.orderingName}}</dd>\r\n                                            </dl>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n\r\n                            <div class=\"col-md-12 mb-12\">\r\n                                <div class=\"animated fadeIn\">\r\n                                    <div class=\"card\">\r\n                                        <div class=\"card-header\">\r\n                                            Datos del Beneficiario 1\r\n                                            <button type=\"button\" class=\"btn btn-primary sm pull-right\"\r\n                                                (click)=\"isCollapsed3 = !isCollapsed3\"><i id=\"datos-generales-chevron\"\r\n                                                    class=\"fa fa-chevron-down\" [hidden]=\"ColapseDB1\"></i>\r\n                                                <i id=\"datos-generales-chevron\" class=\"fa fa-chevron-right\"\r\n                                                    [hidden]=\"!ColapseDB1\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"card-body\" (collapsed)=\"collapsed3($event)\"\r\n                                            (expanded)=\"expanded3($event)\" [collapse]=\"isCollapsed3\">\r\n                                            <dl class=\"row\">\r\n                                                <dt class=\"col-sm-3\">Tipo de Cuenta</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.ordererAccountType}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Cuenta</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.cuentaBeneficiario}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">RFC o CURP</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.rFCOCurpBeneficiario}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Nombre</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.nombreBeneficiario}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Apellido Paterno</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.nombreBeneficiario}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Apellido Materno</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.nombreBeneficiario}}</dd>\r\n                                            </dl>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                        <div class=\"row\">\r\n\r\n\r\n                            <div class=\"col-md-12 mb-12\">\r\n                                <div class=\"animated fadeIn\">\r\n                                    <div class=\"card\">\r\n                                        <div class=\"card-header\">\r\n                                            Datos del Beneficiario 2\r\n                                            <button type=\"button\" class=\"btn btn-primary sm pull-right\"\r\n                                                (click)=\"isCollapsed4 = !isCollapsed4\"><i id=\"datos-generales-chevron\"\r\n                                                    class=\"fa fa-chevron-down\" [hidden]=\"ColapseDB2\"></i>\r\n                                                <i id=\"datos-generales-chevron\" class=\"fa fa-chevron-right\"\r\n                                                    [hidden]=\"!ColapseDB2\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"card-body\" (collapsed)=\"collapsed4($event)\"\r\n                                            (expanded)=\"expanded4($event)\" [collapse]=\"isCollapsed4\">\r\n                                            <dl class=\"row\">\r\n                                                <dt class=\"col-sm-3\">Tipo de Cuenta</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.ordererAccountType}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Cuenta</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.cuentaBeneficiario2}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">RFC o CURP</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.rFCOCurpBeneficiario2}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Nombre</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.nombreBeneficiario2}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Apellido Paterno</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.nombreBeneficiario2}}</dd>\r\n\r\n                                                <dt class=\"col-sm-3\">Apellido Materno</dt>\r\n                                                <dd class=\"col-sm-9\">{{cdaScreen.nombreBeneficiario2}}</dd>\r\n                                            </dl>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n\r\n                        <br />\r\n                        <h3>Cadena Original</h3>\r\n                        <div class=\"col-md-12\">\r\n                            <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\"\r\n                                placeholder=\"Content..\"\r\n                                disabled>{{cdaScreen.selloDigital}}</textarea>\r\n                        </div>\r\n                        <br />\r\n                        <h3>Sello Digital</h3>\r\n                        <div class=\"col-md-12\">\r\n                            <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\"\r\n                                placeholder=\"Content..\"\r\n                                disabled>{{cdaScreen.selloDigital}}</textarea>\r\n                        </div><br />\r\n                        <h3>CDA</h3>\r\n                        <div class=\"col-md-12\">\r\n                            <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\"\r\n                                placeholder=\"Content..\"\r\n                                disabled>{{cdaScreen.selloDigital}}</textarea>\r\n                        </div>\r\n                        <br />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/views/mensajes/mensajes-rounting.module.ts":
/*!************************************************************!*\
  !*** ./src/app/views/mensajes/mensajes-rounting.module.ts ***!
  \************************************************************/
/*! exports provided: MensajesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesRoutingModule", function() { return MensajesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mensajes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mensajes.component */ "./src/app/views/mensajes/mensajes.component.ts");




var routes = [
    {
        path: '',
        component: _mensajes_component__WEBPACK_IMPORTED_MODULE_3__["MensajesComponent"],
        data: {
            title: 'Mensajes'
        }
    }
];
var MensajesRoutingModule = /** @class */ (function () {
    function MensajesRoutingModule() {
    }
    MensajesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MensajesRoutingModule);
    return MensajesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/mensajes/mensajes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/mensajes/mensajes.component.ts ***!
  \******************************************************/
/*! exports provided: MensajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesComponent", function() { return MensajesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mensajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mensajes.service */ "./src/app/views/mensajes/mensajes.service.ts");



var MensajesComponent = /** @class */ (function () {
    function MensajesComponent(menServ) {
        this.menServ = menServ;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.isCollapsed3 = true;
        this.isCollapsed4 = true;
        this.amountSwitch = false;
        this.isCollapsedMain = false;
        this.cda = [];
        this.cdaScreen = {
            paymentType: '',
            cuentaBeneficiario: '',
            orderingName: '',
            rfcOrCurpPayer: ''
        };
    }
    MensajesComponent.prototype.collapsed1 = function (event) {
        this.ColapseDG = true;
    };
    MensajesComponent.prototype.expanded1 = function (event) {
        // console.log(event);
        this.ColapseDG = false;
    };
    MensajesComponent.prototype.collapsed2 = function (event) {
        this.ColapseDO = true;
    };
    MensajesComponent.prototype.expanded2 = function (event) {
        // console.log(event);
        this.ColapseDO = false;
    };
    MensajesComponent.prototype.collapsed3 = function (event) {
        this.ColapseDB1 = true;
    };
    MensajesComponent.prototype.expanded3 = function (event) {
        // console.log(event);
        this.ColapseDB1 = false;
    };
    MensajesComponent.prototype.collapsed4 = function (event) {
        this.ColapseDB2 = true;
    };
    MensajesComponent.prototype.expanded4 = function (event) {
        // console.log(event);
        this.ColapseDB2 = false;
    };
    MensajesComponent.prototype.collapsedMain = function (event) {
    };
    MensajesComponent.prototype.expandedMain = function (event) {
        // console.log(event);
    };
    MensajesComponent.prototype.changeSwitchAmount = function () {
        this.amountSwitch = !this.amountSwitch;
    };
    /*   getCDA() {
        this.menServ.getCDA().subscribe(data => {
            for (const d of (data as any)) {
              this.cda.push({
                paymentType: d.customerHubModel.paymentType,
                cuentaBeneficiario: d.customerHubModel.cuentaBeneficiario,
                rfcOrCurpPayer: d.customerHubModel.rfcOrCurpPayer,
                orderingName: d.customerHubModel.orderingName
              });
    
              this.cdaScreen.paymentType = d.customerHubModel.paymentType;
              this.cdaScreen.cuentaBeneficiario =  d.customerHubModel.cuentaBeneficiario;
              this.cdaScreen.rfcOrCurpPayer = d.customerHubModel.rfcOrCurpPayer;
              this.cdaScreen.orderingName = d.customerHubModel.orderingName;
            }
            console.log(this.cda);
            console.log(data);
    
          });
      } */
    MensajesComponent.prototype.getCDA = function () {
        var _this = this;
        this.menServ.getCDA().subscribe(function (resp) {
            console.log(resp);
            var keys = resp.headers.keys();
            _this.headers = keys.map(function (key) {
                return key + ": " + resp.headers.get(key);
            });
            for (var _i = 0, _a = resp.body; _i < _a.length; _i++) {
                var data = _a[_i];
                _this.cda.push(data);
                _this.cdaScreen.ordererAccountType = data.ordererAccountType;
                _this.cdaScreen.orderingAccount = data.orderingAccount;
                _this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
                _this.cdaScreen.orderingName = data.orderingName;
                _this.cdaScreen.ordererAccountType = data.ordererAccountType;
                _this.cdaScreen.orderingAccount = data.orderingAccount;
                _this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
                _this.cdaScreen.orderingName = data.orderingName;
                _this.cdaScreen.ordererAccountType = data.ordererAccountType;
                _this.cdaScreen.cuentaBeneficiario = data.cuentaBeneficiario;
                _this.cdaScreen.rFCOCurpBeneficiario = data.rFCOCurpBeneficiario;
                _this.cdaScreen.nombreBeneficiario = data.nombreBeneficiario;
                _this.cdaScreen.ordererAccountType = data.ordererAccountType;
                _this.cdaScreen.cuentaBeneficiario2 = data.cuentaBeneficiario2;
                _this.cdaScreen.rFCOCurpBeneficiario2 = data.rFCOCurpBeneficiario2;
                _this.cdaScreen.nombreBeneficiario2 = data.nombreBeneficiario2;
                _this.cdaScreen.selloDigital = data.selloDigital;
                _this.cdaScreen.selloDigital = data.selloDigital;
                _this.cdaScreen.selloDigital = data.selloDigital;
            }
            console.log(_this.cda);
            console.log(_this.headers);
        });
    };
    MensajesComponent.prototype.getCDAById = function (id) {
        this.menServ.getCDAById(id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    MensajesComponent.prototype.searchCDA = function (request) {
        var _this = this;
        this.menServ.searchCDA(request)
            .subscribe(function (data) {
            console.log(data);
            /* this.cdaScreen.paymentType = data.paymentType;
            this.cdaScreen.cuentaBeneficiario = data.cuentaBeneficiario;
            this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
            this.cdaScreen.orderingName = data.orderingName; */
            _this.cdaScreen.ordererAccountType = data.ordererAccountType;
            _this.cdaScreen.orderingAccount = data.orderingAccount;
            _this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
            _this.cdaScreen.orderingName = data.orderingName;
            _this.cdaScreen.ordererAccountType = data.ordererAccountType;
            _this.cdaScreen.orderingAccount = data.orderingAccount;
            _this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
            _this.cdaScreen.orderingName = data.orderingName;
            _this.cdaScreen.ordererAccountType = data.ordererAccountType;
            _this.cdaScreen.cuentaBeneficiario = data.cuentaBeneficiario;
            _this.cdaScreen.rFCOCurpBeneficiario = data.rFCOCurpBeneficiario;
            _this.cdaScreen.nombreBeneficiario = data.nombreBeneficiario;
            _this.cdaScreen.ordererAccountType = data.ordererAccountType;
            _this.cdaScreen.cuentaBeneficiario2 = data.cuentaBeneficiario2;
            _this.cdaScreen.rFCOCurpBeneficiario2 = data.rFCOCurpBeneficiario2;
            _this.cdaScreen.nombreBeneficiario2 = data.nombreBeneficiario2;
            _this.cdaScreen.selloDigital = data.selloDigital;
            _this.cdaScreen.selloDigital = data.selloDigital;
            _this.cdaScreen.selloDigital = data.selloDigital;
        });
    };
    MensajesComponent.prototype.searchCDABtn = function () {
        var request = {};
        request.claveRastreo = this.trackingKey;
        console.log(this.trackingKey);
        this.searchCDA(request);
        //request.rfcCurp = "AYSA871101YH1";
    };
    MensajesComponent.prototype.ngOnInit = function () {
        var request = {};
        request.claveRastreo = "93";
        request.rfcCurp = "AYSA871101YH1";
        //this.getCDA();
        this.searchCDA(request);
    };
    MensajesComponent.ctorParameters = function () { return [
        { type: _mensajes_service__WEBPACK_IMPORTED_MODULE_2__["MensajesService"] }
    ]; };
    MensajesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mensajes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/mensajes/mensajes.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_mensajes_service__WEBPACK_IMPORTED_MODULE_2__["MensajesService"]])
    ], MensajesComponent);
    return MensajesComponent;
}());



/***/ }),

/***/ "./src/app/views/mensajes/mensajes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/mensajes/mensajes.module.ts ***!
  \***************************************************/
/*! exports provided: MensajesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesModule", function() { return MensajesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _mensajes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mensajes.component */ "./src/app/views/mensajes/mensajes.component.ts");
/* harmony import */ var _mensajes_rounting_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mensajes-rounting.module */ "./src/app/views/mensajes/mensajes-rounting.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

// Angular



// Alert Component

// Tabs Module

// Modal Component





var MensajesModule = /** @class */ (function () {
    function MensajesModule() {
    }
    MensajesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mensajes_rounting_module__WEBPACK_IMPORTED_MODULE_8__["MensajesRoutingModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__["AlertModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            declarations: [_mensajes_component__WEBPACK_IMPORTED_MODULE_7__["MensajesComponent"]
            ]
        })
    ], MensajesModule);
    return MensajesModule;
}());



/***/ }),

/***/ "./src/app/views/mensajes/mensajes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/views/mensajes/mensajes.service.ts ***!
  \****************************************************/
/*! exports provided: MensajesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesService", function() { return MensajesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var localUrl = 'assets/data/cda2.json';
var postURL = 'https://pulits.pythonanywhere.com/getspeip';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var MensajesService = /** @class */ (function () {
    function MensajesService(http) {
        this.http = http;
    }
    MensajesService.prototype.getCDA = function () {
        return this.http.get(localUrl, { observe: 'response' });
    };
    MensajesService.prototype.getCDAById = function (id) {
        return this.http.get(localUrl + '/' + id);
    };
    MensajesService.prototype.searchCDA = function (data) {
        return this.http.post(postURL, data, httpOptions);
    };
    MensajesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MensajesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MensajesService);
    return MensajesService;
}());



/***/ })

}]);
//# sourceMappingURL=views-mensajes-mensajes-module.js.map