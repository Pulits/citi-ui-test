export interface cda {
    id: string;
    name: string;
    desc: string;
    price: number;
    updated: Date;

    /*     paymentType: number;
        cuentaBeneficiario: number;
        orderingName: string;
        rfcOrCurpPayer: string; */


    trackingKey: string;
    paymentType: string;
    speiOperationDate: number;
    calenderDatePayment: number;
    calenderTimePayment: string;
    cdaParticipientSPEIKey: number;
    nameOfTransferOrderIssuerParticipant: string;
    orderingName: string;
    ordererAccountType: number;
    orderingAccount: string;
    rfcOrCurpPayer: string;
    typeOfBeneficiaryAccount: number;
    conceptOfPayment: string;
    ivaAmount: string;
    amountOfPayment: string;
    BeneficiaryAccountType2: number;
    digitalCollectionSchemeFolio: string;
    paymentOfTheTransferFee: number;
    transferFeeAmount: string;
    buyerCellNumberAliases: string;
    digitBuyersVerifier: string;
    mombreDelParticipanteReceptor: string;
    nombreBeneficiario: string;
    cuentaBeneficiario: string;
    rFCOCurpBeneficiario: string;
    nombreBeneficiario2: string;
    rFCOCurpBeneficiario2: string;
    cuentaBeneficiario2: number;
    aliasDelNumeroCelularDelVendedor: string;
    digitoVerificadorDelVendedor: string;
    numeroDeSerieDelCertificado: string;
    selloDigital: string;
    strSpeiOperationDate: string;
    strCalenderDatePayment: string;


}