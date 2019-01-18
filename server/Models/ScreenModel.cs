namespace Server.Models.Screen
{
    using System;
    using System.Collections.Generic;

    using System.Globalization;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public partial class Screen
    {
        [JsonProperty("ds-screen")]
        public DsScreen DsScreen { get; set; }
    }

    public partial class DsScreen
    {
        [JsonProperty("tt-screen")]
        public TtScreen[] TtScreen { get; set; }

        [JsonProperty("tt-screen-obj")]
        public TtScreenObj[] TtScreenObj { get; set; }

        [JsonProperty("tt-screen-child-obj")]
        public TtScreenChildObj[] TtScreenChildObj { get; set; }
    }

    public partial class TtScreen
    {
        [JsonProperty("system-id")]
        public string SystemId { get; set; }

        [JsonProperty("screen-name")]
        public string ScreenName { get; set; }

        [JsonProperty("screen-program")]
        public string ScreenProgram { get; set; }

        [JsonProperty("update-by")]
        public string UpdateBy { get; set; }

        [JsonProperty("update-time")]
        public DateTimeOffset? UpdateTime { get; set; }

        [JsonProperty("update-date")]
        public DateTimeOffset? UpdateDate { get; set; }

        [JsonProperty("created-by")]
        public string CreatedBy { get; set; }

        [JsonProperty("created-date")]
        public DateTimeOffset? CreatedDate { get; set; }

        [JsonProperty("reserved-standard")]
        public string ReservedStandard { get; set; }

        [JsonProperty("reserved-custom")]
        public string ReservedCustom { get; set; }

        [JsonProperty("screen-type")]
        public string ScreenType { get; set; }

        [JsonProperty("maint-list-obj")]
        public string MaintListObj { get; set; }

        [JsonProperty("layer-code")]
        public string LayerCode { get; set; }

        [JsonProperty("user-or-group-id")]
        public string UserOrGroupId { get; set; }

        [JsonProperty("layer-type")]
        public string LayerType { get; set; }

        [JsonProperty("skip-layer")]
        public bool SkipLayer { get; set; }

        [JsonProperty("template-code")]
        public string TemplateCode { get; set; }

        [JsonProperty("maint-list-type")]
        public string MaintListType { get; set; }

        [JsonProperty("maint-drop-name")]
        public string MaintDropName { get; set; }

        [JsonProperty("special-case")]
        public string SpecialCase { get; set; }

        [JsonProperty("help-key")]
        public string HelpKey { get; set; }

        [JsonProperty("focus-field")]
        public string FocusField { get; set; }

        [JsonProperty("screen-title")]
        public string ScreenTitle { get; set; }

        [JsonProperty("screen-tooltip")]
        public string ScreenTooltip { get; set; }

        [JsonProperty("change-reference-num")]
        public double ChangeReferenceNum { get; set; }

        [JsonProperty("reserved-free")]
        public string ReservedFree { get; set; }

        [JsonProperty("created-time")]
        public string CreatedTime { get; set; }

        [JsonProperty("reserved-support")]
        public string ReservedSupport { get; set; }

        [JsonProperty("mid-update")]
        public string MidUpdate { get; set; }

        [JsonProperty("virtual-dates")]
        public bool VirtualDates { get; set; }

        [JsonProperty("auto-scr-sync")]
        public bool AutoScrSync { get; set; }
    }

    public partial class TtScreenChildObj
    {
        [JsonProperty("system-id")]
        public string SystemId { get; set; }

        [JsonProperty("layer-code")]
        public string LayerCode { get; set; }

        [JsonProperty("layer-type")]
        public string LayerType { get; set; }

        [JsonProperty("user-or-group-id")]
        public string UserOrGroupId { get; set; }

        [JsonProperty("screen-name")]
        public string ScreenName { get; set; }

        [JsonProperty("obj-name")]
        public string ObjName { get; set; }

        [JsonProperty("obj-parent")]
        public string ObjParent { get; set; }

        [JsonProperty("obj-type")]
        public string ObjType { get; set; }

        [JsonProperty("obj-visible")]
        public bool ObjVisible { get; set; }

        [JsonProperty("obj-enabled")]
        public bool ObjEnabled { get; set; }

        [JsonProperty("obj-image")]
        public string ObjImage { get; set; }

        [JsonProperty("obj-seq")]
        public double ObjSeq { get; set; }

        [JsonProperty("browse-cell-align")]
        public string BrowseCellAlign { get; set; }

        [JsonProperty("obj-width")]
        public double ObjWidth { get; set; }

        [JsonProperty("obj-label-code")]
        public string ObjLabelCode { get; set; }

        [JsonProperty("obj-tooltip-code")]
        public string ObjTooltipCode { get; set; }

        [JsonProperty("obj-format-type")]
        public string ObjFormatType { get; set; }

        [JsonProperty("obj-format")]
        public string ObjFormat { get; set; }

        [JsonProperty("related-field")]
        public string RelatedField { get; set; }

        [JsonProperty("related-table")]
        public string RelatedTable { get; set; }

        [JsonProperty("created-by")]
        public string CreatedBy { get; set; }

        [JsonProperty("created-date")]
        public DateTimeOffset? CreatedDate { get; set; }

        [JsonProperty("update-by")]
        public string UpdateBy { get; set; }

        [JsonProperty("update-time")]
        public string UpdateTime { get; set; }

        [JsonProperty("update-date")]
        public DateTimeOffset? UpdateDate { get; set; }

        [JsonProperty("reserved-standard")]
        public string ReservedStandard { get; set; }

        [JsonProperty("reserved-custom")]
        public string ReservedCustom { get; set; }

        [JsonProperty("obj-initial-value")]
        public string ObjInitialValue { get; set; }

        [JsonProperty("hotkey-code")]
        public string HotkeyCode { get; set; }

        [JsonProperty("hotkey-hdr-name")]
        public string HotkeyHdrName { get; set; }

        [JsonProperty("change-reference-num")]
        public double ChangeReferenceNum { get; set; }

        [JsonProperty("reserved-free")]
        public string ReservedFree { get; set; }

        [JsonProperty("created-time")]
        public string CreatedTime { get; set; }

        [JsonProperty("reserved-support")]
        public string ReservedSupport { get; set; }

        [JsonProperty("always-hidden")]
        public bool AlwaysHidden { get; set; }

        [JsonProperty("always-disabled")]
        public bool AlwaysDisabled { get; set; }

        [JsonProperty("drop-name")]
        public string DropName { get; set; }

        [JsonProperty("null-allowed")]
        public bool NullAllowed { get; set; }

        [JsonProperty("remove-line-feed")]
        public bool RemoveLineFeed { get; set; }

        [JsonProperty("no-related-table")]
        public bool NoRelatedTable { get; set; }

        [JsonProperty("table-name")]
        public string TableName { get; set; }

        [JsonProperty("field-name")]
        public string FieldName { get; set; }

        [JsonProperty("user-def-num")]
        public long UserDefNum { get; set; }

        [JsonProperty("user-def-type")]
        public string UserDefType { get; set; }

        [JsonProperty("field-type")]
        public string FieldType { get; set; }
    }

    public partial class TtScreenObj
    {
        [JsonProperty("system-id")]
        public string SystemId { get; set; }

        [JsonProperty("screen-name")]
        public string ScreenName { get; set; }

        [JsonProperty("obj-active")]
        public bool ObjActive { get; set; }

        [JsonProperty("screen-obj-name")]
        public string ScreenObjName { get; set; }

        [JsonProperty("screen-order")]
        public long ScreenOrder { get; set; }

        [JsonProperty("obj-required")]
        public bool ObjRequired { get; set; }

        [JsonProperty("obj-visible")]
        public bool ObjVisible { get; set; }

        [JsonProperty("obj-enabled")]
        public bool ObjEnabled { get; set; }

        [JsonProperty("update-by")]
        public string UpdateBy { get; set; }

        [JsonProperty("update-time")]
        public string UpdateTime { get; set; }

        [JsonProperty("update-date")]
        public DateTimeOffset? UpdateDate { get; set; }

        [JsonProperty("created-by")]
        public string CreatedBy { get; set; }

        [JsonProperty("created-date")]
        public DateTimeOffset? CreatedDate { get; set; }

        [JsonProperty("reserved-standard")]
        public string ReservedStandard { get; set; }

        [JsonProperty("reserved-custom")]
        public string ReservedCustom { get; set; }

        [JsonProperty("obj-needs-validation")]
        public bool ObjNeedsValidation { get; set; }

        [JsonProperty("obj-parent")]
        public string ObjParent { get; set; }

        [JsonProperty("linked-browse-obj")]
        public string LinkedBrowseObj { get; set; }

        [JsonProperty("linked-browse-has-params")]
        public bool LinkedBrowseHasParams { get; set; }

        [JsonProperty("browse-filter-num-1")]
        public long BrowseFilterNum1 { get; set; }

        [JsonProperty("browse-param-type-1")]
        public string BrowseParamType1 { get; set; }

        [JsonProperty("browse-param-value-1")]
        public string BrowseParamValue1 { get; set; }

        [JsonProperty("browse-filter-num-2")]
        public long BrowseFilterNum2 { get; set; }

        [JsonProperty("browse-param-type-2")]
        public string BrowseParamType2 { get; set; }

        [JsonProperty("browse-param-value-2")]
        public string BrowseParamValue2 { get; set; }

        [JsonProperty("browse-filter-num-3")]
        public long BrowseFilterNum3 { get; set; }

        [JsonProperty("browse-param-type-3")]
        public string BrowseParamType3 { get; set; }

        [JsonProperty("browse-param-value-3")]
        public string BrowseParamValue3 { get; set; }

        [JsonProperty("obj-row")]
        public double ObjRow { get; set; }

        [JsonProperty("obj-col")]
        public double ObjCol { get; set; }

        [JsonProperty("obj-display")]
        public bool ObjDisplay { get; set; }

        [JsonProperty("obj-initial-value")]
        public string ObjInitialValue { get; set; }

        [JsonProperty("layer-code")]
        public string LayerCode { get; set; }

        [JsonProperty("user-or-group-id")]
        public string UserOrGroupId { get; set; }

        [JsonProperty("layer-type")]
        public string LayerType { get; set; }

        [JsonProperty("obj-height")]
        public double ObjHeight { get; set; }

        [JsonProperty("obj-width")]
        public double ObjWidth { get; set; }

        [JsonProperty("row-span")]
        public long RowSpan { get; set; }

        [JsonProperty("col-span")]
        public long ColSpan { get; set; }

        [JsonProperty("obj-process-response")]
        public string ObjProcessResponse { get; set; }

        [JsonProperty("obj-align")]
        public string ObjAlign { get; set; }

        [JsonProperty("obj-cell-align")]
        public string ObjCellAlign { get; set; }

        [JsonProperty("obj-colon")]
        public bool ObjColon { get; set; }

        [JsonProperty("grid-attributes")]
        public string GridAttributes { get; set; }

        [JsonProperty("obj-type")]
        public string ObjType { get; set; }

        [JsonProperty("obj-label-code")]
        public string ObjLabelCode { get; set; }

        [JsonProperty("obj-tooltip-code")]
        public string ObjTooltipCode { get; set; }

        [JsonProperty("obj-format-type")]
        public string ObjFormatType { get; set; }

        [JsonProperty("obj-format")]
        public string ObjFormat { get; set; }

        [JsonProperty("obj-image")]
        public string ObjImage { get; set; }

        [JsonProperty("button-tooltip-code")]
        public string ButtonTooltipCode { get; set; }

        [JsonProperty("unlabelled")]
        public bool Unlabelled { get; set; }

        [JsonProperty("user-def-type")]
        public string UserDefType { get; set; }

        [JsonProperty("user-def-num")]
        public long UserDefNum { get; set; }

        [JsonProperty("special-case")]
        public string SpecialCase { get; set; }

        [JsonProperty("rel-tabpage-pgm")]
        public string RelTabpagePgm { get; set; }

        [JsonProperty("hotkey-code")]
        public string HotkeyCode { get; set; }

        [JsonProperty("hotkey-hdr-name")]
        public string HotkeyHdrName { get; set; }

        [JsonProperty("change-reference-num")]
        public double ChangeReferenceNum { get; set; }

        [JsonProperty("link-collection-parent")]
        public string LinkCollectionParent { get; set; }

        [JsonProperty("reserved-free")]
        public string ReservedFree { get; set; }

        [JsonProperty("created-time")]
        public string CreatedTime { get; set; }

        [JsonProperty("reserved-support")]
        public string ReservedSupport { get; set; }

        [JsonProperty("drop-name")]
        public string DropName { get; set; }

        [JsonProperty("always-hidden")]
        public bool AlwaysHidden { get; set; }

        [JsonProperty("always-disabled")]
        public bool AlwaysDisabled { get; set; }

        [JsonProperty("supports-dot-notation")]
        public bool SupportsDotNotation { get; set; }

        [JsonProperty("no-related-table")]
        public bool NoRelatedTable { get; set; }

        [JsonProperty("table-name")]
        public string TableName { get; set; }

        [JsonProperty("field-name")]
        public string FieldName { get; set; }

        [JsonProperty("help-override-single-language")]
        public string HelpOverrideSingleLanguage { get; set; }

        [JsonProperty("field-type")]
        public string FieldType { get; set; }

        [JsonProperty("obj-created-by-screen-designer")]
        public bool ObjCreatedByScreenDesigner { get; set; }
    }

    public partial class Screen
    {
        public static Screen FromJson(string json) => JsonConvert.DeserializeObject<Screen>(json, Server.Models.Screen.Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this Screen self) => JsonConvert.SerializeObject(self, Server.Models.Screen.Converter.Settings);
    }

    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters = {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };
    }
}
