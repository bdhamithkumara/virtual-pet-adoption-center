import { FaCloudArrowDown } from "react-icons/fa6";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

function DownloadPDF({ pet }) {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#fffbea',
            padding: 50,
            fontFamily: 'Helvetica',
        },
        header: {
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 30,
            color: '#222',
            textTransform: 'uppercase',
            borderBottom: '1px solid #ccc',
            paddingBottom: 10,
        },
        section: {
            margin: 30,
            padding: 30,
            border: '2px solid #f1c40f',
            borderRadius: 12,
            backgroundColor: '#fff',
        },
        subHeader: {
            fontSize: 22,
            marginBottom: 20,
            textAlign: 'center',
            color: '#333',
            textDecoration: 'underline',
        },
        label: {
            fontSize: 18,
            marginBottom: 8,
            color: '#555',
        },
        value: {
            fontSize: 20,
            marginBottom: 20,
            color: '#222',
        },
        boldValue: {
            fontSize: 26,
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#111',
            textAlign: 'center',
        },
        footer: {
            marginTop: 50,
            textAlign: 'center',
            fontSize: 14,
            color: '#777',
        },
    });


    const MyDocument = ({ pet }) => (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.header}>Adoption Certificate</Text>

                <View style={styles.section}>
                    <Text style={styles.subHeader}>Certificate of Adoption</Text>

                    <Text style={styles.value}>This certifies that</Text>
                    <Text style={styles.boldValue}>{pet.name}</Text>

                    <Text style={styles.label}>Pet ID - </Text>
                    <Text style={styles.value}>{pet.id}</Text>

                    <Text style={styles.label}>Species - </Text>
                    <Text style={styles.value}>{pet.species}</Text>

                    <Text style={styles.label}>Adoption Date - </Text>
                    <Text style={styles.value}>{pet.adoption_date.slice(0, 10)}</Text>
                </View>
                <Text style={styles.footer}>
                    Thank you for opening your heart and home to a pet in need.
                </Text>
            </Page>
        </Document>
    )

    return (
        <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center flex-row"
        >
            <PDFDownloadLink document={<MyDocument pet={pet} />} fileName='adoption_record.pdf' >
                Download 
            </PDFDownloadLink>
            <FaCloudArrowDown className="mr-2" /> 
        </button>
    )
}

export default DownloadPDF