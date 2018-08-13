function Combo_Charges() {
    $("#cbochstandard").kendoComboBox({
        dataTextField: "name",
        dataValueField: "code",
        dataSource: []
    });
    $("#cbochgroup").kendoComboBox({
        dataTextField: "gname",
        dataValueField: "gcode",
        dataSource: []
    });
    $("#cbochcategory").kendoComboBox({
        dataTextField: "gname",
        dataValueField: "gcode",
        dataSource: []
    });
    $("#cbotreefiltermedgrp").kendoComboBox({
        dataTextField: "gname",
        dataValueField: "gcode",
        dataSource: [],
        change: function (e) {
            var val = this.value();
            var psVal = $("#medSearch").val();
            var psSrvGrp = val;
            var psType = "MedTreeView";
            var psSrvCat = $("#cbotreefiltermedcat").data("kendoComboBox").value();
            var psSrvTyp = $("#cbotreefiltermedtyp").data("kendoComboBox").value();
            if (e.sender.selectedIndex == -1) {
                e.sender.value(null);
                uiFloatComboBlur("cbotreefiltermedgrpField");
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            } else {
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            }
        }
    });
    $("#cbotreefiltermedcat").kendoComboBox({
        dataTextField: "gname",
        dataValueField: "gcode",
        dataSource: [],
        change: function (e) {
            var val = this.value();
            var psVal = $("#medSearch").val();
            var psSrvGrp = $("#cbotreefiltermedgrp").data("kendoComboBox").value();
            var psType = "MedTreeView";
            var psSrvCat = val;
            var psSrvTyp = $("#cbotreefiltermedtyp").data("kendoComboBox").value();
            if (e.sender.selectedIndex == -1) {
                e.sender.value(null);
                uiFloatComboBlur("cbotreefiltermedcatField");
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            } else {
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            }
        }
    });
    $("#cbotreefiltermedtyp").kendoComboBox({
        dataTextField: "gname",
        dataValueField: "gcode",
        dataSource: [],
        change: function (e) {
            var val = this.value();
            var psVal = $("#medSearch").val();
            var psSrvGrp = $("#cbotreefiltermedgrp").data("kendoComboBox").value();
            var psType = "MedTreeView";
            var psSrvCat = $("#cbotreefiltermedcat").data("kendoComboBox").value();
            var psSrvTyp = val;
            if (e.sender.selectedIndex == -1) {
                e.sender.value(null);
                uiFloatComboBlur("cbotreefiltermedtypField");
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            } else {
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            }
        }
    });
    $("#cbotreefiltercat").kendoComboBox({
        dataTextField: "gname",
        dataValueField: "gcode",
        dataSource: [],
        change: function (e) {
            var val = this.value();
            var psVal = $("#srvSearch").val();
            var psSrvGrp = $("#cbotreefiltergrp").data("kendoComboBox").value();
            var psType = "SrvTreeView";
            var psSrvCat = val;
            var psSrvTyp = $("#cbotreefiltertyp").data("kendoComboBox").value();
            if (e.sender.selectedIndex == -1) {
                e.sender.value(null);
                uiFloatComboBlur("cbotreefiltercatField");
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            } else {
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            }
        }
    });
    $("#cbotreefiltergrp").kendoComboBox({
        dataTextField: "gname",
        dataValueField: "gcode",
        dataSource: [],
        change: function (e) {
            var val = this.value();
            var psVal = $("#srvSearch").val();
            var psSrvGrp = val;
            var psType = "SrvTreeView";
            var psSrvCat = $("#cbotreefiltercat").data("kendoComboBox").value();
            var psSrvTyp = $("#cbotreefiltertyp").data("kendoComboBox").value();
            if (e.sender.selectedIndex == -1) {
                e.sender.value(null);
                uiFloatComboBlur("cbotreefiltergrpField");
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            } else {
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            }
        }
    });
    $("#cbotreefiltertyp").kendoComboBox({
        dataTextField: "gname",
        dataValueField: "gcode",
        dataSource: [],
        change: function (e) {
            var val = this.value();
            var psVal = $("#srvSearch").val();
            var psSrvGrp = $("#cbotreefiltergrp").data("kendoComboBox").value();
            var psType = "SrvTreeView";
            var psSrvCat = $("#cbotreefiltercat").data("kendoComboBox").value();
            var psSrvTyp = val;
            if (e.sender.selectedIndex == -1) {
                e.sender.value(null);
                uiFloatComboBlur("cbotreefiltertypField");
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            } else {
                uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp);
            }
        }
    });
    $('.cbotreefiltermedcatField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbotreefiltermedcatField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbotreefiltermedcatField");
    });
    $('.cbotreefiltermedgrpField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbotreefiltermedgrpField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbotreefiltermedgrpField");
    });
    $('.cbotreefiltermedtypField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbotreefiltermedtypField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbotreefiltermedtypField");
    });
    $('.cbotreefiltercatField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbotreefiltercatField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbotreefiltercatField");
    });
    $('.cbotreefiltergrpField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbotreefiltergrpField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbotreefiltergrpField");
    });
    $('.cbotreefiltertypField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbotreefiltertypField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbotreefiltertypField");
    });
    $('.cbochstandardField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbochstandardField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbochstandardField");
    });
    $('.cbochgroupField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbochgroupField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbochgroupField");
    });
    $('.cbochcategoryField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbochcategoryField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbochcategoryField");
    });
    $('.cbomodifierField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbomodifierField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbomodifierField");
    });
    $('.cbomedmodifierField').live('focus blur', function (e) {
        if (e.type == "focusin")
            uiFloatComboFocus("cbomedmodifierField");
        else if (e.type == "focusout")
            uiFloatComboBlur("cbomedmodifierField");
    });
    var lnreferal = "{'psMasterCode':'MYINTSTDCD'}";
    uicallLookup("O10928", "uivwgetgeneral", lnreferal, callds, "cbochstandard", "code");
    Page_methodCalling('O10934.aspx/uiGetGlobal', 'SRVTYPE,SRVGROUP,SRVCATG');//cahnged indivudual call to single calling by Yuvaraj.S on 08-06-2018
    //Page_methodCalling('O10934.aspx/uiGetGlobal', 'SRVGROUP');
    //Page_methodCalling('O10934.aspx/uiGetGlobal', 'SRVCATG');
    $($(".cbochstandardField").parent().parent().parent()).addClass('is-dirty');
    $($(".cbochgroupField").parent().parent().parent()).addClass('is-dirty');
    $($(".cbochcategoryField").parent().parent().parent()).addClass('is-dirty');
    $($(".cbomodifier").parent().parent().parent()).addClass('is-dirty');
    $($(".cbomedmodifierField").parent().parent().parent()).addClass('is-dirty');
}
function Page_methodCalling(url, paremter) {//Method changed by Yuvaraj.S for Performace on 08-06-2018
    var psParametersgroup = "{gtype:'" + paremter + "',pnLangCode: '" + pnLanCode + "'}";//pnLanCode added by Yuvaraj.S for arabic convertion on 17-07-2018
    $.ajax({
        type: 'post',
        url: url,
        contentType: 'application/json;charset=utf-8',
        data: psParametersgroup,
        dataType: 'json',
        async: true,
        success: function (poData) {
            if (poData.d.length != 0) {
                var dsdata = JSON.parse(poData.d);
                var loparameter = paremter.split(',');
                if (dsdata.Status) {
                    $.each(loparameter, function (index, value) {
                        var lomobdata = $.grep(dsdata.Data.vmunmglobal, function (v) {
                            return v.gtype == value;
                        });
                        if (lomobdata.length > 0) {
                            if (value == "SRVCATG") {
                                $('#cbochcategory').data("kendoComboBox").setDataSource(lomobdata);
                                if (columnfiltername == "svitmcat" && lschargecodemulti != "") {
                                    var lomobdata = chargedashboardfilter(lomobdata, lschargecodemulti, "gcode");
                                    $('#cbotreefiltercat').data("kendoComboBox").setDataSource(lomobdata);
                                    $('#cbotreefiltermedcat').data("kendoComboBox").setDataSource(lomobdata);
                                } else {
                                    $('#cbotreefiltercat').data("kendoComboBox").setDataSource(lomobdata);
                                    $('#cbotreefiltermedcat').data("kendoComboBox").setDataSource(lomobdata);
                                }
                            }
                            else if (value == "SRVGROUP") {
                                $('#cbochgroup').data("kendoComboBox").setDataSource(lomobdata);
                                if (columnfiltername == "svitmgrp" && lschargecodemulti != "") {
                                    var lomobdata = chargedashboardfilter(lomobdata, lschargecodemulti, "gcode");
                                    $('#cbotreefiltergrp').data("kendoComboBox").setDataSource(lomobdata);
                                    $('#cbotreefiltermedgrp').data("kendoComboBox").setDataSource(lomobdata);
                                } else {
                                    $('#cbotreefiltergrp').data("kendoComboBox").setDataSource(lomobdata);
                                    $('#cbotreefiltermedgrp').data("kendoComboBox").setDataSource(lomobdata);
                                }
                            } else if (value == "SRVTYPE") {
                                if (columnfiltername == "svitmtyp" && lschargecodemulti != "") {
                                    var lomobdata = chargedashboardfilter(lomobdata, lschargecodemulti, "gcode");
                                    $('#cbotreefiltermedtyp').data("kendoComboBox").setDataSource(lomobdata);
                                    $('#cbotreefiltertyp').data("kendoComboBox").setDataSource(lomobdata);
                                } else {
                                    $('#cbotreefiltermedtyp').data("kendoComboBox").setDataSource(lomobdata);
                                    $('#cbotreefiltertyp').data("kendoComboBox").setDataSource(lomobdata);
                                }
                            }
                        }
                    });
                }
                //if (dsdata.Status && paremter == "SRVGROUP") {
                //    $('#cbochgroup').data("kendoComboBox").setDataSource(dsdata.Data.vmunmglobal);
                //    $('#cbotreefiltergrp').data("kendoComboBox").setDataSource(dsdata.Data.vmunmglobal);
                //    $('#cbotreefiltermedgrp').data("kendoComboBox").setDataSource(dsdata.Data.vmunmglobal);
                //}
                //else if (dsdata.Status && paremter == "SRVCATG") {
                //    $('#cbochcategory').data("kendoComboBox").setDataSource(dsdata.Data.vmunmglobal);
                //    $('#cbotreefiltercat').data("kendoComboBox").setDataSource(dsdata.Data.vmunmglobal);
                //    $('#cbotreefiltermedcat').data("kendoComboBox").setDataSource(dsdata.Data.vmunmglobal);
                //}
                //else if (dsdata.Status && paremter == "SRVTYPE") {
                //    $('#cbotreefiltermedtyp').data("kendoComboBox").setDataSource(dsdata.Data.vmunmglobal);
                //    $('#cbotreefiltertyp').data("kendoComboBox").setDataSource(dsdata.Data.vmunmglobal);
                //}
            }
        }
    });
}

function chargedashboardfilter(dataset, filterval, filtercolumn) {
    var arr = filterval.split(",");
    var coll = [];
    $.each(arr, function (index, value) {
        $.each(dataset, function (index1, value1) {
            if (value1[filtercolumn] == value) {
                coll.push(JSON.stringify(value1));
            }
        });
    });
    var lopat = '[' + coll + ']';
    locharge = JSON.parse(lopat);
    return locharge;
};
function removedoctorDuplicates(datads) {
    var arr = [], collection = [];
    $.each(datads, function (index, value) {
        if ($.inArray(value.doccode, arr) == -1) {
            arr.push(value.doccode);
            collection.push(value);
        }
    });
    return collection;
}
function removexmlxmlDuplicates(datads, filterval) {
    var arr = [], collection = [];
    $.each(datads, function (index, value) {
        if ($.inArray(value[filterval], arr) == -1) {
            arr.push(value[filterval]);
            collection.push({ "code": value[filterval] });
        }
    });
    return collection;
}
function uiloadserchvalmulti(dataset, filterval) {
    return removexmlxmlDuplicates(dataset, filterval);
};
function loadchargegrid(chargeds) {
    if (psChargeCode != "") {
        var lodata = chargedashboardfilter(chargeds, lschargecodemulti);
        lsBillCharge = lodata;
        uiloadgrid(lodata);
    }
    if (psChargeCode == "") {
        if (psMedStatus == "MSPHA") {
            var lodata = chargedashboardfilter(chargeds, PharmacyFilter);
            lsBillCharge = lodata;
            uiloadgrid(lodata);
        }
        else {
            if (loclientname[0].subclient == "SIH" && (GloScreenslno == "1022" || GloScreenslno == "1025")) {	//client name changed to sub client name changed by Yuvaraj.S on 12-10-2017// Er Discharge Flow medication charge Should not load 
                var lodata = chargedashboardfilterand(chargeds, PharmacyFilter);//line added by Yuvaraj.S for SR #12836 on 03-04-2018
                uiloadgrid(lodata);
                lsBillCharge = lodata;
            }
            else {
                uiloadgrid(chargeds);
                lsBillCharge = chargeds;
            }
        }
    }
};
function uishowrunningtotal(dsdatasource) {
    if (dsdatasource.length > 0) {
        var chargecnt = 0
        var chargetotalamt = 0;
        var totalSum = 0;
        for (var i = 0; i < dsdatasource.length; i++) {
            if (dsdatasource[i].amount == undefined) {//modified by mohan SR#19133
                totalSum = totalSum + dsdatasource[i].grsamt;
                chargecnt = chargecnt + dsdatasource[i].billqty;
            } else {
                totalSum = totalSum + dsdatasource[i].amount;
                chargecnt = chargecnt + dsdatasource[i].qty;
            }
        }
        $("#chargeqty").text(chargecnt);
        chargecnt = dsdatasource.length;
        chargetotalamt = parseFloat(totalSum).toFixed(GlocurrencyDets.curdeci);
        $("#chargetotalamt").text(chargetotalamt);
        $("#chargecnt").text(chargecnt);
    } else {
        var lochargetotal = 0.00;
        var chargetotalamt = parseFloat(lochargetotal).toFixed(GlocurrencyDets.curdeci);
        $("#chargetotalamt").text(chargetotalamt);
        $("#chargecnt").text(0);
        $("#chargeqty").text(0);
    }
}
function uivalidateactivevisits() {
    var filter = JSLINQ(lovisitlnfo).Where(function (r) { return r.disstatus == 0 });
    if (filter.items.length > 0) {
        var filterERvisit = JSLINQ(filter.items).Where(function (r) { return r.visittyp == 30 });
        var filterIPvisit = JSLINQ(filter.items).Where(function (r) { return r.visittyp == 20 });
        if (filterERvisit.items.length > 0 && lovisitMode != "EDIT") {
            uishowalertNew('Visit', 'Active ER Visit is Already Available', 3);
            $("#btnVisitSave").hide();
        } else if ((filterIPvisit.items.length > 0) && (lovisitMode != "EDIT")) {
            uishowalertNew('Visit', 'Active IP Visit is Already Available', 3);
            $("#btnVisitSave").hide();
        } else {
            $("#btnVisitSave").show();
        }
    } else {
        $("#btnVisitSave").show();
    }
};
function uiloadbindScreenScrubergrid(dsdatasource) {
    grid = $("#ScrubberCommonGrid").data("kendoGrid");
    if (grid == undefined) {
        $("#ScrubberCommonGrid").html("");
        $("#ScrubberCommonGrid").kendoGrid({
            dataSource: {
                data: dsdatasource,
                pageSize: 20
            },
            height: 550,
            groupable: true,
            sortable: true,
            scrollable: true,
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 5
            },
            columns: [{
                template: "#if(ismandat==1){#<center><i class='fa fa-circle screenscrubclick' ' style='color: red;'></i></center>#}else{#<center><i class='fa fa-circle screenscrubclick'></i></center>#}#",
                field: "action",
                title: " ",
                hidden: true,
                width: 20
            }, {
                template: "<center><i class='fa fa-envelope scrubmailclick'></i></center>",
                field: "action1",
                title: " ",
                hidden: true,
                width: 20
            }, {
                field: "grouptyp",
                title: "Type",
                width: 60
            }, {
                field: "denlcd",
                title: "Denial Code",
                width: 50
            }, {
                field: "ruledesc",
                title: "Denial Description",
                width: 300
            }, {
                field: "codecnt",
                title: "",
                hidden: true,
                width: 50
            }, {
                field: "afftdclms",
                title: "Denial Description",
                hidden: true,
                width: 50
            }, {
                field: "detslno",
                title: "detslno",
                width: 50, hidden: true
            }]
        });
    }
    else {
        var ds = new kendo.data.DataSource({
            data: dsdatasource,
            pageSize: 20
        });
        grid.setDataSource(ds);
    }
};
uiloadbindScreenScrubergrid([]);
function ui_Get_Modifier(slno, id) {
    var psParameters = "{chargeSlno:'" + slno + "'}";
    $.ajax({
        type: 'post',
        url: 'O17906.aspx/uiSP_GET_MODIFIERDATA',
        contentType: 'application/json;charset=utf-8',
        data: psParameters,
        dataType: 'json',
        async: false,
        success: function (poData) {
            if ($(JSON.parse(poData.d))[0].ErrorLog.length != 0) {
                uishowalertNew('MODIFIERDATA', $(JSON.parse(poData.d))[0].ErrorLog + "in uiSP_GET_MODIFIERDATA", 3);
            }
            else {
                var Modifdata = JSON.parse(poData.d).Data.MODIFIERDATA;
                if (Modifdata.length > 0) {
                    if ($("#" + id).data("kendoComboBox") != undefined)
                        $("#" + id).data("kendoComboBox").enable(true);
                    else
                        $("#" + id).prop('disabled', false);
                    uimyCombo(id, "fuldesc", "codeval", Modifdata, "", "");

                }
                else {
                    if ($("#" + id).data("kendoComboBox") != undefined) {
                        $("#" + id).data("kendoComboBox").enable(false);
                    }
                    else {
                        $("#" + id).prop('disabled', true);
                    }

                }
            }
        }
    });
}
function UIsavelocalIISIP() {
    var billslno = 0;
    $.ajax({
        type: 'post',
        url: 'O10934.aspx/GetLocalIPAddress',
        contentType: 'application/json;charset=utf-8',
        data: [],
        dataType: 'json',
        async: false,
        success: function (poData) {

        }
    });

}
function UIClaimHdrDtlWQ() {
    if (lnCliamSlno != "" && lnCliamSlno != undefined && lnCliamSlno != null) {
        var billslno = 0;
        $.ajax({
            type: 'post',
            url: 'O17906.aspx/GetClaimHdrDtlWQs',
            contentType: 'application/json;charset=utf-8',
            data: JSON.stringify({ lnClaimslno: lnCliamSlno, lnclmbilslno: billslno }),
            dataType: 'json',
            async: true,
            success: function (poData) {
                var loClaimHdrDtlWQ = poData.d;
                var loClaimHdrDtlWQs = JSON.parse(loClaimHdrDtlWQ).Header;
                if (loClaimHdrDtlWQs.length > 0) {
                    if (loClaimHdrDtlWQs[0].grntname != "" && loClaimHdrDtlWQs[0].grntname != null) {
                        var payerdet = loClaimHdrDtlWQs[0].grntname + '-' + loClaimHdrDtlWQs[0].hplanname;
                    } else {
                        var payerdet = loClaimHdrDtlWQs[0].hplanname;
                    }
                    $("#claimpayname").html(loClaimHdrDtlWQs[0].pyrname);
                    $("#claimpoligran").html(payerdet);
                    $("#claimpoligran").attr("title", payerdet);
                    $("#claimpayid").html(loClaimHdrDtlWQs[0].plcyid);
                    $("#claimpaydt").html(loClaimHdrDtlWQs[0].fromdate);
                    $("#claimpaydt").attr("title", loClaimHdrDtlWQs[0].fromdate + '-' + loClaimHdrDtlWQs[0].todate);
                    $("#claimno").html(loClaimHdrDtlWQs[0].claimid);
                    $("#claimno").attr("title", loClaimHdrDtlWQs[0].claimid);
                    $("#claimdate").html(loClaimHdrDtlWQs[0].clmdt);
                    $("#claimdate").attr("title", loClaimHdrDtlWQs[0].clmdt);
                    $("#claimstatus").html(loClaimHdrDtlWQs[0].denial);
                    $("#claimslno").html(loClaimHdrDtlWQs[0].clmslno);
                    if (lnqueuewq != 101000000014) {
                        $(".claimattach").hide();
                        $("#visitTypesDDNew").hide();
                        $("#claimstatus").html('');
                        $('#claimstatus').parent().hide();
                        $('#claimdate').parent().removeClass('payerPolicy')
                    }
                    $('.payerData').hide();
                    $('#invoicedetail').show();
                }
            }
        });
    }
}

function GetNotesCount(mrnslno) {
    var translno = mrnslno;
    var visit = 0;
    var Type = 10;
    var psParameters = JSON.stringify({ pnMrnSlno: mrnslno, pnTranSlno: translno, EncSlno: visit, Type: Type });
    $.ajax({
        type: 'post',
        url: 'O17906.aspx/uiGetnotes',
        contentType: 'application/json;charset=utf-8',
        data: psParameters,
        dataType: 'json',
        async: true,
        success: function (poData) {
            if (JSON.parse(poData.d).Data != null) {
                if (JSON.parse(poData.d).Data.Noteshistory != undefined && JSON.parse(poData.d).Data.Noteshistory.length > 0) {
                    $("#imgPatient").click();
                }
            }
        }
    });
};


function chargedashboardfilter(dataset, filterval, filtercolumn) {
    var arr = filterval.split(",");
    var coll = [];
    $.each(arr, function (index, value) {
        $.each(dataset, function (index1, value1) {
            if (value1[filtercolumn] == value) {
                coll.push(JSON.stringify(value1));
            }
        });
    });
    var lopat = '[' + coll + ']';
    locharge = JSON.parse(lopat);
    return locharge;
};


function chargedashboardfilterand(dataset, filterval, filtercolumn) {
    var arr = filterval.split(",");
    var coll = [];
    $.each(arr, function (index, value) {
        var coll1 = [];
        $.each(dataset, function (index1, value1) {
            if (value1[filtercolumn] != value) {
                coll1.push(JSON.stringify(value1));
            }
        });
        var lopat = '[' + coll1 + ']';
        locharge = JSON.parse(lopat);
        dataset = locharge;
    });
    var lopat1 = '[' + coll + ']';
    locharge1 = JSON.parse(lopat1);
    return locharge;
};
function uiCallCrystalReport(psobjid, pstagID, psDataSourceId, psFunctionName, psParameters, reportName, crystalParam, psrandomNo, psPageType, psfilename, psParseParam, psPrintType, psScreen) {//Hail_HST_INT_511 UI295
    psPageType = (psPageType == "") ? "P" : psPageType;
    psParseParam = (psParseParam != undefined && psParseParam != null) ? "" : psParseParam;
    if (psParameters != undefined)
        psParameters = '{"psobjid":"' + psobjid + '","pstagID":"' + pstagID + '","psLookupId":"' + psDataSourceId + '","psFunctionName":"' + psFunctionName + '","reportName":"' + reportName + '","psCrystalParam":"' + crystalParam + '","psRandomNo":"' + psrandomNo + '","psPageType":"' + psPageType + '","psParameters":"' + psParameters + '","psfilename":"' + psfilename + '","psParseParam":"' + psParseParam + '","psPrintType":"' + psPrintType + '"}';
    else
        psParameters = '{"psobjid":"' + psobjid + '","pstagID":"' + pstagID + '","psLookupId":"' + psDataSourceId + '","psFunctionName":"' + psFunctionName + '","reportName":"' + reportName + '","psCrystalParam":"' + crystalParam + '","psRandomNo":"' + psrandomNo + '","psPageType":"' + psPageType + '","psParameters":"","psfilename":"' + psfilename + '","psParseParam":"' + psParseParam + '","psPrintType":"' + psPrintType + '"}';
    var pagename = "../../Reports/frmReportView.aspx";
    psParameters = psParameters || "{}";
    var lsurl = pagename + "/LoadCrystalReport";
    var lsReturn;
    $.ajax({
        type: "POST",
        url: lsurl,
        data: psParameters,
        contentType: "application/json; charset=utf-8",
        async: true,
        cache: false,
        dataType: "json",
        ProcessData: true,
        success: function (results) {
            if (results.d != false)
                var randomID = "&uniqueID=" + results.d;
            else
                var randomID = "&uniqueID=" + psrandomNo;
            //   $("#" + pstagID + " iframe").attr('src', PROD_URL + 'Reports/frmCrptView.aspx?' + randomID);
            var UrlPath = getprojectpath("GCI") + 'Reports/frmCrptView.aspx?' + randomID + '&Screen=' + psScreen + '&ScreenTitle=' + reportName;
            window.open(UrlPath, '_blank');
        },
        error: function (err) {
            uishowalertNew(psFunctionName, err.status + " - " + err.statusText, "e", false, "1");
        }
    });
    return lsReturn;
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function uiallcomboloadingbaseddoctor() {
    if ($('#cboDischargeAdviceBy').data("kendoComboBox") != undefined) {
        $('#cboDischargeAdviceBy').data("kendoComboBox").setDataSource(loDoctor);
        var lnOpertDr = $($(".spnvodr")[0]).text();
        if (lnOpertDr != "") {
            $('#cboDischargeAdviceBy').data("kendoComboBox").value(lnOpertDr);
            uiFloatComboBlur("cboDischargeAdviceByField");
        }
    }
}
//Method added by Yuvaraj.S for SR #18137 on 08-06-2018 begin
function uifiltercondtiformation(psSrvCat, psSrvGrp, psSrvTyp) {
    var lscondition = "";
    if (psSrvCat != "") {
        lscondition = "r.svitmcat == '" + psSrvCat + "'"
    }
    if (psSrvGrp != "") {
        if (lscondition != "") {
            lscondition += " && r.svitmgrp == '" + psSrvGrp + "'"
        } else {
            lscondition = "r.svitmgrp == '" + psSrvGrp + "'"
        }
    }
    if (psSrvTyp != "") {
        if (lscondition != "") {
            lscondition += " && r.svitmtyp == '" + psSrvTyp + "'"
        } else {
            lscondition = "r.svitmtyp == '" + psSrvTyp + "'"
        }
    }
    return lscondition;
}
function uiSearchServicefilter(psVal, psType, psSrvCat, psSrvGrp, psSrvTyp) {
    var lofilterdatasrv = [];
    var lofilterdatamed = [];
    var loDatads = [];
    if (psVal.length == 0 && psSrvCat == "" && psSrvGrp == "" && psSrvTyp == "") {
        uishowalertNew("Search", "Please enter atleast one Character for search.", 3);
        return false;
    }
    var loData = Glocharge;
    if (loData == "" || loData == undefined) {
        return false;
    }
    if (psType == "SrvTreeView") {
        var lscondition = uifiltercondtiformation(psSrvCat, psSrvGrp, psSrvTyp);
        if (lscondition != "") {
            lofilterdatasrv = $.grep(Glocharge, function (r) {
                return eval(lscondition);
            });
        }
    } else {
        if (GloScreenslno != "1058" && GloScreenslno != "1059") {
            var lscondition = uifiltercondtiformation(psSrvCat, psSrvGrp, psSrvTyp);
            if (lscondition != "") {
                lofilterdatamed = $.grep(Glochargemed, function (r) {
                    return eval(lscondition);
                });
            }
        } else {
            var lscondition = uifiltercondtiformation(psSrvCat, psSrvGrp, psSrvTyp);
            if (lscondition != "") {
                lofilterdatamed = $.grep(gordCharge, function (r) {
                    return eval(lscondition);
                });
            }
        }

    }
    if (psType == "SrvTreeView") {
        if (lofilterdatasrv.length > 0) {
            loDatads = new kendo.data.DataSource({
                data: lofilterdatasrv
            });
        } else {
            if (psSrvCat == "" && psSrvGrp == "" && psSrvTyp == "") {
                loDatads = new kendo.data.DataSource({
                    data: Glocharge
                });
            }
        }
    }
    else {
        if (lofilterdatamed.length > 0) {
            loDatads = new kendo.data.DataSource({
                data: lofilterdatamed
            });
        } else {
            if (GloScreenslno != "1058" && GloScreenslno != "1059") {
                if (psSrvCat == "" && psSrvGrp == "" && psSrvTyp == "") {
                    loDatads = new kendo.data.DataSource({
                        data: Glochargemed
                    });
                }
            } else {
                if (psSrvCat == "" && psSrvGrp == "" && psSrvTyp == "") {
                    loDatads = new kendo.data.DataSource({
                        data: gordCharge
                    });
                }
            }
        }
    }
    if (GloScreenslno != "1058" && GloScreenslno != "1059") {
        if (psVal.length != 0 && (loDatads.length > 0 || loDatads.options != undefined)) {
            var lsfilter = {
                logic: "or",
                filters: [
                    //{ field: "svitmcd", operator: "contains", value: psVal },
                    //{ field: "svitmdsc", operator: "contains", value: psVal }
                    { field: "text", operator: "contains", value: psVal }
                ]
            }
            loDatads.filter(lsfilter);
        }
    } else {
        if (psVal.length != 0 && (loDatads.length > 0 || loDatads.options != undefined)) {
            var lsfilter = {
                logic: "and",
                filters: [
                   { field: "text", operator: "contains", value: psVal },
                   { field: "svitmtyp", operator: "eq", value: PharmacyFilter }
                ]
            }
            loDatads.filter(lsfilter);
        }
    }
    if (GloScreenslno == "1058" || GloScreenslno == "1059") {
        $('#cbomedcode').data("kendoComboBox").setDataSource(gordCharge);
    }
    if (psVal.length != 0 && (loDatads.length > 0 || loDatads.options != undefined)) {
        var loCharge = loDatads.view();
    } else {
        if (psType == "SrvTreeView") {
            var loCharge = lofilterdatasrv;
        } else {
            var loCharge = lofilterdatamed;
        }
    }
    if (loCharge.length == 0) {
        $('.diagDataTreeNoData').show();
        $('.diagDataTreeData').hide();
        uishowalertNew("Service Search", "No Records", 3);
    }
    else {
        $('.diagDataTreeNoData').hide();
        $('.diagDataTreeData').show();
       //uishowalertNew("Service Search", "(" + loCharge.length + ") services found for your search.", 1);
		 uishowalertNew("Service Search", "(" + loCharge.length + ") " + uiMultiLanCaption("services found for your search."), 1);
        $(".diagDataTreeNoData").hide();
        if (psVal.length != 0) {
            $('#' + psType).jstree(true).settings.core.data = loCharge.toJSON();
        } else {
            $('#' + psType).jstree(true).settings.core.data = JSON.parse(JSON.stringify(loCharge));
        }
        $('#' + psType).show();
        $('#' + psType).jstree(true).refresh();
        $('#' + psType).jstree("open_all");
        $('#' + psType).jstree("deselect_all");
    }
}

function uiserviceadddirect(data, val) {
    var lnEncAppstat = $(".spnvappstat").text();
    if (lnEncAppstat != "88") {//added by yuvaraj.S
        if (data != "") {
            var ldsFillDs = JSLINQ(loCharges).Where(function (item) { return item.id == data.node.id });
        } else {
            var ldsFillDs = JSLINQ(loCharges).Where(function (item) { return item.id == val });
        }
        if (ldsFillDs.items.length > 0) {
            if (ldsFillDs.items[0].isprcip == true || ldsFillDs.items[0].isedtdsc == true) {
                $("#loadview").show();
                setTimeout(function () {
                    $("#dvsrvcontent").show();
                    $("#dvsrvsearch").hide();
                    var loCboBar = $("#cbocode").data("kendoComboBox");
                    $('#cbocode').data("kendoComboBox").setDataSource(ldsFillDs.items);
                    psViewServiesContent.Service.set("code", ldsFillDs.items[0].serialno);
                    loCboBar.text(ldsFillDs.items[0].svitmcd);
                    uiFloatComboBlur("cbocodeField");
                    serviceLoad = true;
                    loCboBar.trigger("change");
                    serviceLoad = false;
                    $($('#txtdesc').parent()).addClass("is-dirty");
                }, 5);
            } else {
                if (loFinancelnfo.length != 0) {
                    $(".srvsearchIconCode").removeClass("appdisable");
                    var addrigths = false;
                    var scrub = uiGetScrubCharge();
                    if (scrub) {
                        return false;
                    }
                    if (gnVisitSlno == undefined || gnVisitSlno == "") {
                        uishowalertNew("Charge info", " Please Activate the Visit to add new Charge.", 3);
                        return false;
                    }
                    else if ((loclientname[0].subclient == "KH") && ($($(".vType")[0]).text() == "ER")) {
                        var lnEncAppstat = $(".spnvappstat").text();
                        if (lnEncAppstat == "99" && PSMODE == "Add") {
                            addrigths = true;
                        }
                    }
                    if (addrigths) {
                        uishowalertNew("Charge Entry", "Add charge is applicable only for active visit.", 3);
                        return false;
                    }
                    var auth = false;
                    $.each(loFinancelnfo, function (index, value) {
                        if (value.finstat == 110) {
                            auth = true;
                            return false;
                        }
                    })
                    if (auth) {
                        uishowalertNew('Charge Entry', "Eligibility Verification Pending for this Account, Cannot Proceed.", 3);
                        return false;
                    }
                    var lnReturn = '1'
                    if (lnReturn == '1') {
                        if (gnEncounterdisdate != null && gnEncounterdisdate != "") {
                            var ds = kendo.toString(new Date(gnEncounterdisdate), "dd/MM/yyyy HH:mm");
                        } else {
                            var enctype = uigetEncounterType();
                            if ((enctype == 10 || enctype == 30) && loclientname[0].clienname == "DHA") {
                                ds = kendo.toString(new Date(gnEncounterdate), "dd/MM/yyyy HH:mm");
                            } else {
                                var ds = PnGetDate;
                            }
                        }
                        var lnserviceavaildate = new Date(ds);
                        if (lnserviceavaildate != null && lnserviceavaildate != "") {
                            if (lnqueuewq != "101000000011") {
                                if (gnEncounterdisdate != null && gnEncounterdisdate != "") {
                                    uiservicetreeadd(ldsFillDs.items);
                                    //if (lnserviceavaildate <= new Date(gnEncounterdisdate)) {//commented by mohan instruct to karthikraja 17-07-2018
                                   
                                    //}
                                    //else {
                                    //    uishowalertNew('Charge Entry', "Service avail date time should be less than or equal to visit Discharge date time. ", 3);
                                    //}
                                } else {
                                    uiservicetreeadd(ldsFillDs.items);
                                }
                            }
                            else {
                                uiservicetreeadd(ldsFillDs.items);
                            }
                        }
                    }
                } else {
                    uishowalertNew('Charge Entry', "Please add payer. ", 3);
                }
            }
        }
    } else {
        uishowalertNew("Charge Entry", "Add charge is applicable only for active visit.", 3);
    }
}

function uiservicetreeadd(dataset) {
    try {
        var serviceslno = 0;
        $.ajax({
            type: 'post',
            url: 'O10934.aspx/uiGetSlno',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            async: false,
            success: function (PData) {
                if (JSON.parse(PData.d).Data.clsSerialno.length > 0) {
                    serviceslno = JSON.parse(PData.d).Data.clsSerialno[0].serialno;
                }
            }
        });
        var filterdiag = JSLINQ(Dignosis).Where(function (r) { return r.priority == lodigpriority && r.diagslno == 0 });
        var loChrgDetail = []; var loDiagDetail = []; var diagslno = "";
        loChrgDetail.push({ "chrgcode": dataset[0].svitmcd, "chgDesc": dataset[0].svitmdsc });
        loChrgDetail = JSON.stringify(loChrgDetail);
        if (filterdiag.items.length > 0) {
            diagslno = filterdiag.items[0].diagslno;
            loDiagDetail.push({ "digcode": filterdiag.items[0].diagcode, "digDesc": filterdiag.items[0].diagdesc });
        } else {
            loDiagDetail.push({ "digcode": "", "digDesc": "" });
        }
        loDiagDetail = JSON.stringify(loDiagDetail);
        var amunt = 1 * parseFloat(dataset[0].baserate).toFixed(GlocurrencyDets.curdeci);
        var enctype = uigetEncounterType();
        if (gnEncounterdisdate != null && gnEncounterdisdate != "") {
            //var effectivedate = kendo.toString(new Date(gnEncounterdisdate), "dd/MM/yyyy HH:mm");
            var effectivedate = gnEncounterdisdate;
        } else {
            if ((enctype == 10 || enctype == 30) && loclientname[0].clienname == "DHA") {
                //effectivedate = kendo.toString(new Date(gnEncounterdate), "dd/MM/yyyy HH:mm");
                effectivedate = gnEncounterdate;
            } else {
                var effectivedate = PnGetDate;
            }
        }
        var lnchagslno = dataset[0].serialno;
        var filter1 = JSLINQ(lsChargeEntrySave).Where(function (r) { return r.actstat == "1" && r.chargeslno == lnchagslno });
        if (filter1.items.length != 0) {
            var lnneworderdate = kendo.toString(new Date(effectivedate), "yyyy-MM-dd");
            var lnoldorderdate = kendo.toString(new Date(filter1.items[0].effectivedate), "yyyy-MM-dd");
            if (lnoldorderdate == lnneworderdate && PSMODE == "Add") uishowalertNew('Charge Entry', "Charge(s) already available in same service avail date. ", 2);
        }
        lsChargeEntrySave.push({
            "serialno": serviceslno, "mrnslno": GlobMrnslno, "mrnno": GlobMrnNo, "encslno": gnVisitSlno,
            "encno": gsVisitNo, "chgtype": loServic, "chargeslno": dataset[0].serialno, "Chargno": dataset[0].svitmcd,
            "chargename": dataset[0].svitmdsc, "modifier": 0.00,
            "chginfo": loChrgDetail, "effectivedate": effectivedate, "expdate": "",
            "orderdoctor": loinchargdoc, "orderdoctorspecialty": loinchargdocspec,
            "operatingdoctor": loinchargdoc, "operatingdoctorspecialty": loinchargdocspec,
            "qty": "1", "uom": "0", "bldqty": 0, "avlqty": "0",
            "rate": parseFloat(dataset[0].baserate).toFixed(GlocurrencyDets.curdeci), "amount": parseFloat(amunt).toFixed(GlocurrencyDets.curdeci), "pckgslno": "0",
            "chrgsrc": "0", "chrgsrcno": "0", "diagnosisslno": diagslno,
            "diagnosisdescription": loDiagDetail, "remrk": "", "doseunit": "",
            "doseuOM": "", "frequency": "", "duration": "", "duritiontyp": "",
            "priority": "", "frmloc": "", "toloc": "", "stkqty": "", "stkuom": "", "scriotyp": "", "actstat": "1", "ordstat": "0"
            , "enctype": enctype, "isdelete": 1, "svitmgrp": dataset[0].svitmgrp,
            "svitmcat": dataset[0].svitmcat, "svitmtyp": dataset[0].svitmtyp
            , "chstandard": dataset[0].iitstdcd, "chgroup": dataset[0].svitmgrp, "chcategory": dataset[0].svitmcat
        });
        var filter = JSLINQ(lsChargeEntrySave).Where(function (r) { return r.chgtype == loServic && r.actstat == "1" });
        if (psChargeCode != "") {
            var lodata = chargedashboardfilter(filter.items, lschargecodemulti, columnfiltername);
            var tempDataConnection = kendo.template($("#BindViewService").html());
            $("#dvservicetemp").html(tempDataConnection(lodata));
            uihidechargedeletebutton(lodata);
            $('#scountservice').text(lodata.length);
        }
        if (psChargeCode == "") {
            var tempDataConnection = kendo.template($("#BindViewService").html());
            $("#dvservicetemp").html(tempDataConnection(filter.items));
            $('#scountservice').text(filter.items.length);
            uihidechargedeletebutton(filter.items);
        }
    } catch (err) {
    }
}

function uimedicationadddirect(data, pharmacyreturn) {
    var lnEncAppstat = $(".spnvappstat").text();
    if (lnEncAppstat != "88") {//added by yuvaraj.S
        if (pharmacyreturn) {
            var ldsFillDs = JSLINQ(gordCharge).Where(function (item) { return item.id == data.node.id });
        } else {
            var ldsFillDs = JSLINQ(loCharges).Where(function (item) { return item.id == data.node.id });
        }
        if (ldsFillDs.items.length > 0) {
            if (ldsFillDs.items[0].isprcip == true || ldsFillDs.items[0].isedtdsc == true) {
                $("#loadview").show();
                setTimeout(function () {
                    $("#dvmedcontent").show();
                    $("#dvmedsearch").hide();
                    var loCboBar = $("#cbomedcode").data("kendoComboBox");
                    if (GloScreenslno != "1058" && GloScreenslno != "1059") {
                        var ldsFillDs = JSLINQ(loCharges).Where(function (item) { return item.id == data.node.id });
                        $('#cbomedcode').data("kendoComboBox").setDataSource(ldsFillDs.items);
                        psViewServiesContent.Service.set("code", ldsFillDs.items[0].serialno);
                        loCboBar.text(ldsFillDs.items[0].svitmcd);
                        uiFloatComboBlur("cbomedcodeField");
                        gbPharmacyLoad = true;
                        loCboBar.trigger("change");
                        gbPharmacyLoad = false;
                        $($('#txtmddescr').parent()).addClass("is-dirty");
                    }
                    else {
                        var ldschgslno = JSLINQ(gordCharge).Where(function (item) { return item.id == data.node.id });
                        if (ldschgslno.items.length > 0) {
                            glochgslno = ldschgslno.items[0].chgslno;
                            gnreturnordqty = ldschgslno.items[0].ordqty;
                            var filterdlt = JSLINQ(lsChargeEntrySave).Where(function (r) { return r.chrgsrcno == glochgslno && r.actstat == "1" });
                            if (filterdlt.items.length > 0) {
                                $("#dvmedcontent").hide();
                                $("#dvmedsearch").show();
                                uishowalertNew('Charge Entry', "Selected Service already added.", 3);
                                $("#loadview").hide();
                                return false;
                            }
                            else {
                                $('#cbomedcode').data("kendoComboBox").setDataSource(ldschgslno.items);
                                psViewServiesContent.Service.set("code", ldschgslno.items[0].serialno);
                                loCboBar.text(ldschgslno.items[0].svitmcd);
                                uiFloatComboBlur("cbomedcodeField");
                                gbPharmacyLoad = true;
                                loCboBar.trigger("change");
                                gbPharmacyLoad = false;
                                $($('#txtmddescr').parent()).addClass("is-dirty");
                                $("#btnaddmed").click();
                            }
                        }
                    }
                }, 5);
            } else {
                if (loFinancelnfo.length != 0) {
                    $(".medsearchIconCode").removeClass("appdisable");
                    var addrigths = false;
                    if (GloScreenslno != "1058" && GloScreenslno != "1059") {
                        var scrub = uiGetScrubCharge();
                        if (scrub) {
                            return false;
                        }
                    }
                    if (gnVisitSlno == undefined || gnVisitSlno == "") {
                        uishowalertNew("Charge info", " Please Activate the Visit to add new Charge.", 3);
                        return false;
                    }
                    else if ((loclientname[0].subclient == "KH") && ($($(".vType")[0]).text() == "ER")) {
                        var lnEncAppstat = $(".spnvappstat").text();
                        if (lnEncAppstat == "99" && PSMODE == "Add") {
                            addrigths = true;
                        }
                    }
                    if (addrigths) {
                        uishowalertNew("Charge Entry", "Add charge is applicable only for active visit.", 3);
                        return false;
                    }
                    var auth = false;
                    $.each(loFinancelnfo, function (index, value) {
                        if (value.finstat == 110) {
                            auth = true;
                            return false;
                        }
                    })
                    if (auth) {
                        uishowalertNew('Charge Entry', "Eligibility Verification Pending for this Account, Cannot Proceed.", 3);
                        return false;
                    }
                    if (gnEncounterdisdate != null && gnEncounterdisdate != "") {
                        var ds = kendo.toString(new Date(gnEncounterdisdate), "dd/MM/yyyy HH:mm");
                    } else {
                        var enctype = uigetEncounterType();
                        if ((enctype == 10 || enctype == 30) && loclientname[0].clienname == "DHA") {
                            ds = kendo.toString(new Date(gnEncounterdate), "dd/MM/yyyy HH:mm");
                        } else {
                            var ds = PnGetDate;
                        }
                    }
                    var lnserviceavaildate = new Date(ds);
                    if (lnserviceavaildate != null && lnserviceavaildate != "") {
                        if (lnqueuewq != "101000000011") {
                            if (gnEncounterdisdate != null && gnEncounterdisdate != "") {
                                uimedtreeadd(ldsFillDs.items);
                                //if (lnserviceavaildate <= new Date(gnEncounterdisdate)) {
                                //    uimedtreeadd(ldsFillDs.items);
                                //}
                                //else {
                                //    uishowalertNew('Charge Entry', "Service avail date time should be less than or equal to visit Discharge DateTime. ", 3);
                                //}
                            } else {
                                uimedtreeadd(ldsFillDs.items);
                            }
                        }
                        else {
                            uimedtreeadd(ldsFillDs.items);
                        }
                    }
                } else {
                    uishowalertNew('Charge Entry', "Please add payer. ", 3);
                }
            }
        }
    } else {
        uishowalertNew("Charge Entry", "Add charge is applicable only for active visit.", 3);
    }
}

function uimedtreeadd(dataset) {
    try {
        var serviceslno = 0;
        $.ajax({
            type: 'post',
            url: 'O10934.aspx/uiGetSlno',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            async: false,
            success: function (PData) {
                if (JSON.parse(PData.d).Data.clsSerialno.length > 0) {
                    serviceslno = JSON.parse(PData.d).Data.clsSerialno[0].serialno;
                }
            }
        });
        var orderfrom = "";
        var orderto = "";
        var lodata = $("#cboordFrom").data("kendoComboBox").dataSource.data();
        if (lodata.length == 1) {
            orderfrom = lodata[0].codeval;
        }
        var lodata = $("#cboordTo").data("kendoComboBox").dataSource.data();
        if (lodata.length == 1) {
            orderto = lodata[0].codeval;
        }
        var filterdiag = JSLINQ(Dignosis).Where(function (r) { return r.priority == lodigpriority && r.diagslno == 0 });
        var loChrgDetail = []; var loMDiagDetail = []; var diagslno = "";
        loChrgDetail.push({ "chrgcode": dataset[0].svitmcd, "chgDesc": dataset[0].svitmdsc });
        loChrgDetail = JSON.stringify(loChrgDetail);
        if (filterdiag.items.length > 0) {
            diagslno = filterdiag.items[0].diagslno;
            loMDiagDetail.push({ "digcode": filterdiag.items[0].diagcode, "digDesc": filterdiag.items[0].diagdesc });
        } else {
            loMDiagDetail.push({ "digcode": "", "digDesc": "" });
        }
        loMDiagDetail = JSON.stringify(loMDiagDetail);
        var amunt = 1 * parseFloat(dataset[0].baserate).toFixed(GlocurrencyDets.curdeci);
        var enctype = uigetEncounterType();
        if (gnEncounterdisdate != null && gnEncounterdisdate != "") {
            var effectivedate = kendo.toString(new Date(gnEncounterdisdate), "dd/MM/yyyy HH:mm");
        } else {
            if ((enctype == 10 || enctype == 30) && loclientname[0].clienname == "DHA") {
                effectivedate = kendo.toString(new Date(gnEncounterdate), "dd/MM/yyyy HH:mm");
            } else {
                var effectivedate = PnGetDate;
            }
        }
        var lnchagslno = dataset[0].serialno;
        var filter = JSLINQ(lsChargeEntrySave).Where(function (r) { return r.actstat == "1" && r.chargeslno == lnchagslno });
        if (filter.items.length != 0) {
            var lnneworderdate = kendo.toString(new Date(effectivedate), "yyyy-MM-dd");
            var lnoldorderdate = kendo.toString(new Date(filter.items[0].effectivedate), "yyyy-MM-dd");
            if (lnoldorderdate == lnneworderdate && PSMODE == "Add" && GloScreenslno != "1058" && GloScreenslno != "1059") uishowalertNew('Charge Entry', "Charge(s) already available in same service avail date. ", 2);
        }
        lsChargeEntrySave.push({
            "serialno": serviceslno, "mrnslno": GlobMrnslno, "mrnno": GlobMrnNo, "encslno": gnVisitSlno,
            "encno": gsVisitNo, "chgtype": loMedic, "chargeslno": dataset[0].serialno, "Chargno": dataset[0].svitmcd,
            "chargename": dataset[0].svitmdsc, "modifier": 0.00,
            "chginfo": loChrgDetail, "effectivedate": effectivedate, "expdate": "",
            "orderdoctor": loinchargdoc, "orderdoctorspecialty": loinchargdocspec,
            "operatingdoctor": loinchargdoc, "operatingdoctorspecialty": loinchargdocspec,
            "qty": "1", "uom": "0", "bldqty": 0, "avlqty": "0",
            "rate": parseFloat(dataset[0].baserate).toFixed(GlocurrencyDets.curdeci), "amount": parseFloat(amunt).toFixed(GlocurrencyDets.curdeci), "pckgslno": "0",
            "chrgsrc": "0", "chrgsrcno": dataset[0].chgslno, "diagnosisslno": diagslno,
            "diagnosisdescription": loMDiagDetail, "remrk": "", "doseunit": "",
            "doseuom": "", "frequency": "", "duration": "", "duritiontyp": "",
            "priority": "", "frmloc": orderfrom, "toloc": orderto, "stkqty": "", "stkuom": "", "scriotyp": "", "actstat": "1", "ordstat": "0"
            , "enctype": enctype, "isdelete": 1, "svitmgrp": dataset[0].svitmgrp,
            "svitmcat": dataset[0].svitmcat, "svitmtyp": dataset[0].svitmtyp
            , "chstandard": dataset[0].iitstdcd, "chgroup": dataset[0].svitmgrp, "chcategory": dataset[0].svitmcat
        });
        var filter = JSLINQ(lsChargeEntrySave).Where(function (r) { return r.chgtype == loMedic && r.actstat == "1" });
        var tempDataConnection = kendo.template($("#BindViewServiceMed").html());
        $("#dvmedtemp").html(tempDataConnection(filter.items));
        uihidechargedeletebutton(filter.items);
        $('#scountmed').text(filter.items.length);
        if (lsExpDate == "") {
            var ldCrnDate = new Date(uiGetfmtServerdateTime());
            lsExpDate = ldCrnDate;
        }
        var lnlotSerialno = '';
        var lnjsonlength = '';
        var filter = [];
        lnlotSerialno = serviceslno;
        var lnlotdetslno = '';
        if (loLotinfo.length > 0) {
            filter = JSLINQ(loLotinfo).Where(function (r) { return r.serialno == lnlotSerialno });
            lnjsonlength = filter.items.length;
        } else {
            lnjsonlength = filter.length;
        }
        if (lnjsonlength == 0) {
            lnlotdetslno = parseFloat(lnlotSerialno + "001");
        }
        else {
            var dataSource = new kendo.data.DataSource({
                data: filter.items,
                aggregate: [
                  { field: "detslno", aggregate: "max" },
                ]
            });
            dataSource.fetch(function () {
                var results = dataSource.aggregates().detslno;
                lnNewDetslno = results.max;
            });
            lnlotdetslno = lnNewDetslno + 1;
        }
        loLotinfo.push({
            "serialno": lnlotSerialno,
            "detslno": lnlotdetslno,
            "lotno": lsLotNo,
            "expdate": lsExpDate,
            "sellprc": 0,
            "stockqty": 0,
            "qty": 0,
            "itemslno": 0,
            "wareslno": 0,
            "substsl": 0,
            "barcode": "",
            "costprc": 0,
            "refdctyp": "",
            "issueuom": 0,
            "authsta": 0,
            "status": 0,
            "authlvl": 0,
            "authby": "",
            "actstat": 1
        });
        lsLotNo = 0;
        lsExpDate = "";
    } catch (err) {
    }
}

//Method added by Yuvaraj.S for SR #18137 on 08-06-2018 end

//Method added by Yuvaraj.S for SR #18400 on 12-06-2018 begin
function uicallgetgracehrforpayer() {
    var lopatientdet = [];
    encvalue = $($(".vType")[0]).text();
    if (encvalue == "OP") { enctype = 10; }
    else if (encvalue == "IP") { enctype = 20; }
    else { enctype = 30; }
    lopatientdet.push({
        "serialno": parseInt(0),
        "tcd": parseInt(pnTCD),
        "bcd": parseInt(pnBCD),
        "fcd": parseInt(pnFCD),
        "bdocdt": PnGetDate,
        "mrn": parseInt(GlobMrnslno),
        "mrnslno": parseInt(GlobMrnslno),
        "enctype": enctype.toString(),
        //"enctype": parseInt(enctype),
        "encno": gnVisitSlno,
        "inchadr": parseInt(loinchargdoc),
        "drsplty": parseInt(loinchargdocspec),
        "clinicintime": null,
        "clinicouttime": null,
        "visittype": "",
        "creusrid": Number(PnUserID)
    });
    if (loFRDeatilDataJSON.length > 0) {
        var PayorInfo = [];
        var todate = null;
        $.each(loFRDeatilDataJSON, function (index, value) {
            if (value.todate == "") {
                todate = null;
            } else {
                todate = value.todate;
            }
            PayorInfo.push({
                "serialno": value.serialno,
                "detslno": parseInt(value.detslno),
                "payrslno": value.payrslno,
                "hplnslno": value.hplnslno,
                "lvlstrng": value.lvlstrng,
                "efffrom": value.fromdate,
                "effto": todate,
                "plcyord": parseInt(value.plcyord),
                "actnetbillamt": 0,
                "netbillamt": 0,
                "roundoffval": 0,
                "finstat": parseInt(value.pnfinstat)
            });
        });
    }

    if (lopatientdet.length > 0 && PayorInfo.length > 0) {
        var psParameters = JSON.stringify({ psPatientDet: JSON.stringify(lopatientdet), psPayerDet: JSON.stringify(PayorInfo), psProcessid: '101000000361' })
        $.ajax({
            type: 'post',
            url: 'O10934.aspx/UIMYPAYERGRACEPROCESS',
            contentType: 'application/json;charset=utf-8',
            data: psParameters,
            dataType: 'json',
            async: false,
            success: function (poData) {
                if (poData.d != "") {
                    if (JSON.parse(poData.d).Data != null) {
                        var fingracedata = JSON.parse(poData.d).Data.RateRule
                        if (fingracedata != undefined && fingracedata != null && fingracedata != "") {
                            if (fingracedata.length > 0) {
                                $.each(fingracedata, function (index, value) {
                                    var lomobdata = $.grep(loFRDeatilDataJSON, function (v) {
                                        return v.detslno == value.findetslno;
                                    });
                                    if (lomobdata.length > 0) {
                                        lomobdata[0].gracedys = value.gracedys;
                                        lomobdata[0].alertreq = value.alertreq;
                                    }
                                });
                            }
                        }
                    }
                }
            }
        });
    }
}
//Method added by Yuvaraj.S for SR #18400 on 12-06-2018 end

//Method added by Yuvaraj.S for SR #18590 on 12-06-2018 begin
function UiGetChargeDetailsfordirectbill() {
  
    $.ajax({
        type: 'post',
        url: 'O10934.aspx/GetipChargeDetail',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify({ lnPatSlno: GlobMrnslno, lnvisitslno: gnVisitSlno, columnfilter: columnfilter, isinclude: isinclude, filtervalue: filtervalue }),
        dataType: 'json',
        async: false,
        success: function (poData) {
            loPendingcharge = poData.d;
            for (var i = 0; loPendingcharge.JSonResult == undefined; i++) {
                loPendingcharge = JSON.parse(loPendingcharge);
            }
            var loPendingcharge = JSON.parse(loPendingcharge.JSonResult);
            var lochargedetail = loPendingcharge.Detail;
            lsBillCharge = lochargedetail;
            var concatsummary;
            if (lochargedetail.length > 0) {
                $.each(loPendingcharge, function (key, val) {
                    if (key != "Detail") {
                        if (key == "Facility") {
                            val[0].icon = "fa fa-hospital-o";
                            val[1].icon = "hide";
                        }
                        if (key == "Order Doctor") {
                            val[0].icon = "fa fa-user-md";
                            for (var i = 0; i <= val.length - 1; i++) {
                                if (i > 0) { val[i].icon = "hide"; }
                            }
                        }
                        if (key == "Order Doctor Specialty") {
                            val[0].icon = "fa fa-stethoscope";
                            for (var i = 0; i <= val.length - 1; i++) {
                                if (i > 0) { val[i].icon = "hide"; }
                            }
                        }
                        if (key == "Charge Type") {
                            val[0].icon = "fa fa-sitemap";
                            for (var i = 0; i <= val.length - 1; i++) {
                                if (i > 0) { val[i].icon = "hide"; }
                            }
                        }
                        if (key == "Charge Group") {
                            val[0].icon = "fa fa-users";
                            for (var i = 0; i <= val.length - 1; i++) {
                                if (i > 0) { val[i].icon = "hide"; }
                            }
                        }
                        if (key == "Charge Category") {
                            val[0].icon = "fa fa-sort-amount-desc";
                            for (var i = 0; i <= val.length - 1; i++) {
                                if (i > 0) { val[i].icon = "hide"; }
                            }
                        }
                        if (key == "Effective Date") {
                            val[0].icon = "fa fa-calendar-check-o";
                            for (var i = 0; i <= val.length - 1; i++) {
                                if (i > 0) { val[i].icon = "hide"; }
                            }
                        }
                        if (key == "Entered By") {
                            val[0].icon = "fa fa-user";
                            for (var i = 0; i <= val.length - 1; i++) {
                                if (i > 0) { val[i].icon = "hide"; }
                            }
                        }
                        if (concatsummary == undefined) concatsummary = val;
                        else
                            concatsummary = concatsummary.concat(val);
                    }
                });
                uiloadWorkqinfo(concatsummary);
                setTimeout(function () {
                    $(".filter-panel .item-header").trigger("click");
                }, 5)
            }
        }
    });
}
function uicallbillviewdirect() {
    setTimeout(function () {
        var enctype = uigetEncounterType();
        if (lsBillCharge.length == 0) {
            uishowalertNew("Billing", "No charges available for Bill process.", 3);
            return false;
        }
        lodetbillgenrate = [];
        lodetbillgen = [];
        uiGetBillRec();
        var filter = JSLINQ(lsBillCharge).Where(function (r) { return r.actstat == "1" });
        if (filter.items.length != 0) {
            lnCrosssum = 0;
            lnTotDiscountAmt = 0;
            $("#dashBoardView").hide();
            $("#ordbycataddcharge").hide();
            $("#ipProfileView").show();
            $("#mainPatntBnr").hide();
            $("#mainPatntBnr").removeClass("floatBanner");
            $(".ChargeEntry").hide();
            $("#ipbillingview").hide();
            if (enctype == 10 || enctype == 30) {
                if (GloScreenslno == "1023" || GloScreenslno == "1064") {
                    psscrtype = "CON";
                } else {
                    psscrtype = "DIR";
                }
            } else {
                psscrtype = "IPB";
            }
            $("#filterPanel").show();
            $("#billingView").show();
            $("#Billing").hide();
            $(".BlngView").addClass("active");
            var slno = ''; var detslno = '';
            if (lsBillCharge.length != 0) {
                for (var i = 0; i <= lsBillCharge.length - 1; i++) {
                    slno += Number(lsBillCharge[i].serialno) + ",";
                    detslno += Number(lsBillCharge[i].detslno) + ",";
                }
                slno = slno.slice(0, -1);
                detslno = detslno.slice(0, -1);
            }
            if (slno != "") {
                pnRefdetslno = detslno;
            } else {
                pnRefdetslno = psDetslno;
            }
            $.ajax({
                type: 'post',
                url: 'O17906.aspx/uiGetPolicy',
                contentType: 'application/json;charset=utf-8',
                data: "",
                dataType: 'json',
                async: false,
                success: function (poData) {
                    if ($(JSON.parse(poData.d))[0].ErrorLog.length != 0) {
                        uishowalertNew('Billing', $(JSON.parse(poData.d))[0].ErrorLog + "in uiGetPolicy", 3);
                    }
                    else {
                        GloPayer = JSON.parse(poData.d).Data.vmpolicy;
                    }
                }
            })
            var psParameters = "{pnVisitSlno:'" + gnVisitSlno + "'}";
            $.ajax({
                type: 'post',
                url: 'O17906.aspx/uiGetPayorDetail',
                contentType: 'application/json;charset=utf-8',
                data: psParameters,
                dataType: 'json',
                async: false,
                success: function (poData) {
                    if ($(JSON.parse(poData.d))[0].ErrorLog.length != 0) {
                        uishowalertNew('Billing', $(JSON.parse(poData.d))[0].ErrorLog + "in uiGetPayorDetail", 3);
                    }
                    else {
                        GloCustomer = JSON.parse(poData.d).Data.PayorInfo;
                    }
                }
            })
            uiBillGenrate(slno);
            if (psscrtype == "IPB" || psscrtype == "DIR" || psscrtype == "CON") {
                $($(".pnlTitle.BlngView")[0]).html('<span><i class="fa  fa-ge pnlIcon prI"></i>' + uiMultiLanCaption("Finalize Bill Information") + '</span>')
            }
            else {
                $($(".pnlTitle.BlngView")[0]).html('<span><i class="fa  fa-ge pnlIcon prI"></i>' + uiMultiLanCaption("Refund Bill Information") + '</span>')
            }
        }
        else {
            uishowalertNew("Billing", "Plese Select the Charge to Generate", 3);
        }
    }, 5);

}

//Method added by Yuvaraj.S for SR #18590 on 12-06-2018 end


//Method added by Yuvaraj.S for SR #18400 on 13-06-2018 begin
function uishowpayerlevelalert(ldfinacedata) {
    var lofinacealert = [];
    var count = 1;
    if (ldfinacedata.length > 0) {
        $.each(ldfinacedata, function (index, value) {
            if (value.gracetodate != null && value.alertreq == "1") {
                var ldpayertodate = "";
                var payertodate = kendo.toString(new Date(value.gracetodate), "yyyy-MM-dd");
                var newdate = new Date(payertodate);
                if (value.gracedys != null && value.gracedys != "") {
                    newdate.setDate(newdate.getDate() + value.gracedys);
                }
                if (newdate != "" && (newdate < new Date(PnGetDate))) {
                    var policyid = value.polid;
                    if (policyid != "Self") {
                        if (policyid == "") {
                            var alert = value.payernam + "is expired on" + kendo.toString(new Date(newdate), "dd/MM/yyyy");
                        } else {
                            var alert = policyid + "is expired on" + kendo.toString(new Date(newdate), "dd/MM/yyyy");

                        }
                        lofinacealert.push({
                            "grouptyp": "Finace Registration",
                            "denlcd": count,
                            "ruledesc": value.payernam
                        });
                    }
                }
                count++;
            }
        });
        if (lofinacealert.length > 0) {
            var srpmain = kendo.template($("#Errormain").html());
            $("#scrubmainbody").html(srpmain(lofinacealert));
            $(".errcode").text("Code");
            $(".errdiscription").text("Description");
            $(".errorlog-modal-custom-title").html('<i class="fa fa-list"></i> Alert Info');
            $(".errorlog-modal-backdrop").show();
            $(".errorlog-modal-container-box").css({ "bottom": "33px" });
        }
    }
}

//Method added by Yuvaraj.S for SR #18400 on 13-06-2018 end



//YY 12-06
$("#btnapprovYES").click(function () {
    uicallapprovalscreen(0); showSmallBnr(); $("#filterPanel").hide();
    //  PnApprovalSlno
});
//YY 12-06

//common function added by Yuvaraj.S on 02-07-2018 begin
function uigetCollectionChargesfn(billslno) {
    try {
        var psParameters = "{pnBillslno:'" + billslno + "'}";
        $.ajax({
            type: 'post',
            url: 'O10934.aspx/uigetCollectionCharges',
            contentType: 'application/json;charset=utf-8',
            data: psParameters,
            dataType: 'json',
            async: false,
            success: function (poData) {
                loColChagSlno = JSON.parse(poData.d).Data.dsChrgSlno;
            }
        });
    } catch (err) {
        alert("Error in uigetCollectionChargesfn");
    }
}
function uiGetCurDecimal() {
    try {
        if (pnFCD.indexOf(",") != -1) {
        }
        else {
            if (gnVisitSlno != "") {
                var pstype = "";
                pstype = "CHARGE"
                var lnencslno = gnVisitSlno;
                if (lnencslno == "") {
                    lnencslno = 0;
                }
                var psParameters = "{psSlno:'" + pnFCD + "',psMrnno:'" + GlobMrnslno + "',psEncslno:'" + lnencslno + "',psType:'" + pstype + "'}";
                $.ajax({
                    type: 'post',
                    url: 'O10934.aspx/uiGetBillCollection',
                    contentType: 'application/json;charset=utf-8',
                    data: psParameters,
                    dataType: 'json',
                    async: true,
                    success: function (poDatasuccess) {
                        poData = poDatasuccess.d;
                        if ($(JSON.parse(poData))[0].ErrorLog.length != 0) {
                            uishowalertNew('Collection', $(JSON.parse(poData))[0].ErrorLog, 3);
                        }
                        else {
                            var lodata = JSON.parse(poData).Data.vtbillcollection;
                            if (lodata.length != 0) {
                                loCurrency = lodata;
                                lnDecimalCnt = loCurrency[0].curdecimal;
                            }
                        }
                    }
                })
            }
        }
    }
    catch (err) {
        alert("Error in uiGetBaseAmnt");
    }
}
function uiGetCurrencyDets(gnVisitSlno) {
    if (gnVisitSlno == "") { gnVisitSlno = "0" } //SR#14275 
    var psParameters = JSON.stringify({ pnEncslno: gnVisitSlno });
    try {
        $.ajax({
            type: 'post',
            url: 'O10934.aspx/uiGetCurrencyDet',
            contentType: 'application/json;charset=utf-8',
            data: psParameters,
            dataType: 'json',
            async: false,
            success: function (poDatasuccess) {
                if (poDatasuccess.d != "") {
                    if (JSON.parse(poDatasuccess.d).Data.CurrencyDetails[0] != undefined) {
                        GlocurrencyDets = [];
                        GlocurrencyDets = JSON.parse(poDatasuccess.d).Data.CurrencyDetails[0];
                    }
                }
            }
        });
    }
    catch (err) {
        uishowalertNew('Currency Details', "Error In Get Currency Details", 3);
    }
}
function WQStageCheck(psParameters) {
    var Isnostage = true;
    if (GloScreenslno != "1048") //"1048" - OP Private Pharmacy  Redmine : 17602
    {
        $.ajax({
            type: 'post',
            url: 'O17906.aspx/uiWQStage',
            contentType: 'application/json;charset=utf-8',
            data: psParameters,
            dataType: 'json',
            async: false,
            success: function (poDatasuccess) {
                if (poDatasuccess.d != "") {
                    Isnostage = false;
                    uishowalertNew('Warning', poDatasuccess.d, 3);
                }
            }
        });
    }
    return Isnostage;
}
$("#table-1 .clstoggle .action").live("click", function (e) {
    if (lobillheaderdata.length > 0 && lobilldetdata.length > 0) {
        var lsdata = [];
        var billslno = $(this).parent().attr("data-billslno");
        if (billslno != undefined) {
            lsdata = $.grep(lobilldetdata, function (value) {
                return value.hbilserialno == billslno;
            });
            if (lsdata.length > 0) {
                var tempDataConnection = kendo.template($("#billdetail").html());
                $(this).parent().next().children().children().html([]);
                $(this).parent().next().children().children().append(tempDataConnection(lsdata));
            }
        }
        $(this).parent().next().children().children().slideToggle();
    }
});
$("#EcnCalender").click(function () {
    if (psViewVisitContent.Visit.docSpclty == "" || psViewVisitContent.Visit.docSpclty == null) {
        uishowalertNew('Visit Appointment', ' Plese select the Doctor Specialty', '3');
    }
    else if (psViewVisitContent.Visit.doc == "" || psViewVisitContent.Visit.doc == null) {
        uishowalertNew('Visit Appointment', ' Plese select the Doctor', '3');
    }
    else {
        uiCallGenerateSlot();
    }
});
function uiCallGenerateSlot() {
    var lnFromdate = "", lnTodate = "", lnslotdate = "";
    if (lovisitMode == "ADD") {
        lnFromdate = kendo.toString(kendo.parseDate(psViewVisitContent.Visit.encdate), "yyyy-MM-dd");
        lnTodate = kendo.toString(kendo.parseDate(psViewVisitContent.Visit.encdate), "yyyy-MM-dd");
        lnslotdate = kendo.toString(kendo.parseDate(psViewVisitContent.Visit.encdate), "dd/MM/yyyy");
    }
    if (lovisitMode == "EDIT") {
        var encdate = psViewVisitContent.Visit.encdate.split(" ");
        lnFromdate = kendo.toString(Date.parse(encdate[0]), 'yyyy-MM-dd');
        lnTodate = kendo.toString(Date.parse(encdate[0]), 'yyyy-MM-dd');
        lnslotdate = encdate[0];
    }
    var gs_Mins = "0";
    var strFromTime = "00:00:01";
    var strToTime = "23:59:59 ";
    PageMethods.UIGenerateSlot("2", psViewVisitContent.Visit.docSpclty, psViewVisitContent.Visit.doc, gs_Mins, lnFromdate, lnTodate, strFromTime, strToTime, function (successdata) {
        if (successdata != null && successdata != "null") {
            var dsTimeSlot = JSON.parse(successdata).TimeSlot;
            var filter = JSLINQ(dsTimeSlot).Where(function (r) { return r.Date == lnslotdate });
            if (filter.items.length > 0) {
                var HtmlFile = getprojectpath("GCI") + "GCI/F0263/HTML/AppointmentSlot.html";
                $("#VisitAppointment").load(HtmlFile);
                $("#Appointment_check").modal("show");
                $("#dtpFromdatePick").hide();
                $(".monthAndDate").text(lnslotdate);
                var ipApproval = kendo.template($("#template_slottime").html());
                $("#tmp_appointbktimes").html(ipApproval(filter.items));
                slottooltip();
            }
            else {
                $("#tmp_appointbktimes").html("");
                uishowalertNew('Visit Appointment', ' Free slot(s) not available', '3');
            };
        }
    });
}
function slottooltip() {
    var tooltip = $("#tmp_appointbktimes .bokslot").kendoTooltip({
        filter: "span",
        width: 200,
        height: 70,
        position: "top",
        content: kendo.template($("#template_tooltipslotcontent").html()),
    }).data("kendoTooltip");
};
//common function added by Yuvaraj.S on 02-07-2018 end
function uishowalertsingle(scrnname, count, alert) {
    var lsMessage = [];
    lsMessage.push({
        "grouptyp": uiMultiLanCaption(scrnname),
        "denlcd": count,
        "ruledesc": uiMultiLanCaption(alert)
    });
    var srpmain = kendo.template($("#Errormain").html());
    $("#scrubmainbody").html(srpmain(lsMessage));
    $(".errcode").text(uiMultiLanCaption("Code"));
    $(".errdiscription").text(uiMultiLanCaption("Description"));
	$(".errtype").text(uiMultiLanCaption("Type"));
    $(".errorlog-modal-custom-title").html('<i class="fa fa-list"></i> '+  uiMultiLanCaption('Alert Info'));
    $(".errorlog-modal-backdrop").show();
    $(".errorlog-modal-container-box").css({ "bottom": "33px" });
}
//added by Cibi for Show alert for common on 11-07-2018
function uishowalertwarning(JsMessage) {
    debugger;
    var lsMessage = [];
    JsMessage.map(function (x) {
        lsMessage.push({
            "grouptyp": uiMultiLanCaption(x.scrnname),
            "denlcd": x.count,
            "ruledesc": uiMultiLanCaption(x.alert)
        });
    });
    var srpmain = kendo.template($("#Errormain").html());
    $("#scrubmainbody").html(srpmain(lsMessage));
    $(".errcode").text(uiMultiLanCaption("Code"));
    $(".errdiscription").text(uiMultiLanCaption("Description"));
	$(".errtype").text(uiMultiLanCaption("Type"));
    $(".errorlog-modal-custom-title").html('<i class="fa fa-list"></i> '+ uiMultiLanCaption('Alert Info'));
    $(".errorlog-modal-backdrop").show();
    $(".errorlog-modal-container-box").css({ "bottom": "33px" });
}
$(".trigmdropdown").live("click", function () {
    $(this).next().slideToggle();
    $(".mbackdrop").fadeIn();
});
$(".mbackdrop").live("click", function () {
    $("ul.Mdropdown").fadeOut();
    $(".mbackdrop").hide();
});
$(".trigprint").live("click", function () {
    $("ul.Mdropdown").fadeOut();
    $(".mbackdrop").hide();
});
//line added by Yuvaraj.S for autobillgenerate on 12-07-2018
function uiCallautobillview() {
    uiHideScreens();
    var lsreturn = true;
    if (Autobillview == "AUTOBILL") {
        $("#loadview").show();
        UiGetChargeDetailsfordirectbill();
        if (lsBillCharge.length > 0) {
            uicallbillviewdirect();
            lsreturn = true;
        } else {
            lsreturn = false;
            $("#loadview").hide();
        }
    } else {
        lsreturn = false;
    }
    return lsreturn;
}
//Method Modified by Dharma (29/07/2018) 
function UIpolicyordersortResults(dsdata, prop, asc) {
     loFRDeatilDataJSON = [];
    var lnGetActlength = JSLINQ(dsdata).Where(function (item) { return item.isactive == true });
    loFRDeatilDataJSON = dsdata.sort(function (a, b) {
        if (asc) {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });

    var lnorder = 0;
    $.each(dsdata, function (index, value) {
        if (value.payrslno == GloSelfPayerSlno) {
            value.plcyord = lnGetActlength.items.length;
        } else {
            if (value.isactive) {
                value.plcyord = parseInt(lnorder) + 1;
                lnorder++;
            }
            else {
                value.plcyord = 0;
            }
        }
    });
};

function uiloadmasterdatabassedonstrval(strval, mastercode, pnlangcode) {//pnlangcode parameter added by Yuvaraj.S on 17-07-2018
    var psParameter = "{psEnctype:'" + strval + "',psMastercode:'" + mastercode + "', pnLangcode: '" + pnlangcode + "'}";
    var lodata = [];
    $.ajax({
        type: "POST",
        url: "O17906.aspx/uigetmasterdatavsstrval",
        data: psParameter,
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: "json",
        ProcessData: true,
        success: function (result) {
            if (result.d.length > 0) {
                successdata = result.d;
                lodata = JSON.parse(successdata).vmmasterdata;
            };
        },
    });
    return lodata;
};

function uiGetGenralmasterdata(psMastercode, pnlangcode) {
    var lodata = [];
    $.ajax({
        type: 'post',
        url: 'O10934.aspx/uiGetGeneralMasterDatads',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify({ psMastercode: psMastercode, pnlangcode: pnlangcode }),
        dataType: 'json',
        async: false,
        success: function (poData) {
            if (poData != null && poData != undefined && poData != "{}") {
                if (JSON.parse(poData.d).Data.masterdata.length != 0) {
                    lodata = JSON.parse(poData.d).Data.masterdata;
                }
            }
        }
    });
    return lodata;
}
function uiconverttoarabic(control) {
    var hslang = localStorage.getItem("hdLanguage");
    if (hslang == 'ar') {
        $('#' + control).addClass("jstree-rtl");
    }
    else {
        if ($('#' + control).hasClass("jstree-rtl") == true) {
            $('#' + control).removeClass("jstree-rtl");
        }
    }
}

function uicallprintCollection(pnslno) {
    try {
        var lnSerialno = GlobMrnslno; var lnRegistryKey = PnRegKey;
        var lnslno = pnslno;
        var lnusername = PnUserName;
        var loginpath = "D:";
        var prtpath = uiloadaction("O11842", "GCI", lnRegistryKey, "qsparam={'pnserialno':" + lnslno + ",'pncurdecimal':" + lnDecimalCnt + ",'pnLoginname':'" + lnusername + "','pnpath':'D:'}", "sourcetype=p&printmode=a", "", "", "", "", "", true);
        var psobjid = prtpath.split("aid=")[1].split("&")[0];
        uiCallCrystalReport(psobjid, 'gCON_' + psobjid + '_1', 'O11742', 'Getinvoicecollectionrpt', prtpath.split("qsparam=")[1].split("&")[0], 'Invoice Collection Report', '', Math.round(getRandomArbitrary(1000000, 9999999)), "P", "", "", "", "directprt");

        setTimeout(function () { // SR#19948
            $.ajax({
                type: 'post',
                url: 'O10934.aspx/uiSaveaudit',
                contentType: 'application/json;charset=utf-8',
                data: JSON.stringify({ pnrefserialno: parseInt(lnslno), pnrefdetslno: parseInt(lnslno), psreftable: 'vtbillhpatrecpay', psAudittype: 'PR', psmeneid: 'M3051292', psRegistry: PnRegKey }),
                dataType: 'json',
                async: true,
                success: function (poDatasuccess) {
                    poData = poDatasuccess.d;
                    if (poData == "") {
                    }
                }
            });
        }, 5000);
    }
    catch (err) {
        uishowalertsingle('Collection', 1, 'Error in uicallprintCollection');


    }
}

