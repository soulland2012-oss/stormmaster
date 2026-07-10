import { StyleSheet } from '@react-pdf/renderer'

export const GOLD = '#B8942A'
export const PARCHMENT = '#FAFAF5'
export const INK = '#2A2620'
export const MUTED = '#8A7A50'
export const FAINT = '#B8AA80'

export const pdfStyles = StyleSheet.create({
  page: {
    backgroundColor: PARCHMENT,
    paddingTop: 46,
    paddingBottom: 46,
    paddingHorizontal: 44,
    fontFamily: 'PT Serif',
    fontSize: 10,
    color: INK,
  },
  headerEyebrow: {
    fontSize: 8,
    color: GOLD,
    letterSpacing: 3,
    marginBottom: 6,
  },
  headerTitle: {
    fontFamily: 'Cormorant Garamond',
    fontWeight: 700,
    fontSize: 28,
    color: INK,
    marginBottom: 3,
  },
  headerSubtitle: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 18,
  },
  headerDivider: {
    borderBottomWidth: 1.5,
    borderBottomColor: GOLD,
    marginBottom: 22,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  sectionNum: {
    fontFamily: 'Cormorant Garamond',
    fontWeight: 600,
    fontSize: 9,
    color: GOLD,
    marginRight: 9,
    width: 14,
  },
  sectionBar: {
    width: 2,
    height: 11,
    backgroundColor: GOLD,
    marginRight: 9,
  },
  sectionTitle: {
    fontFamily: 'Cormorant Garamond',
    fontWeight: 700,
    fontSize: 14,
    color: INK,
  },
  sectionBody: {
    paddingLeft: 25,
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.55,
    color: INK,
  },
  emptyText: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: FAINT,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  field: {
    marginBottom: 8,
    marginRight: 22,
    minWidth: 90,
  },
  fieldLabel: {
    fontSize: 7.5,
    color: MUTED,
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  fieldValue: {
    fontSize: 10,
    color: INK,
  },
  divider: {
    borderBottomWidth: 0.75,
    borderBottomColor: GOLD,
    opacity: 0.35,
    marginVertical: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 44,
    right: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 7.5,
    color: FAINT,
    letterSpacing: 1,
  },
})
