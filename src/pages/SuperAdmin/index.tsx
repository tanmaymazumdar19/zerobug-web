import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import OutlinedCancel from '@mui/icons-material/CancelOutlined';
import CheckOutlined from '@mui/icons-material/CheckOutlined';
import { useNavigate } from 'react-router-dom';

interface Column {
  id: 'name' | 'email' | 'industry' | 'status' | 'year';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'industry', label: 'Industry', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 },
  { id: 'year', label: 'Established In', minWidth: 170 },
];

interface Data {
  id: number;
  name: string;
  email: string;
  industry: string;
  status: boolean;
  year: string;
}

function createData(
  name: string,
  email: string,
  industry: string,
  status: boolean,
  year: string
): Data {
  return { id: parseInt(`${Math.random()*10000000}`), name, email, industry, status, year };
}

const rows = [
  createData("Centimia","ksooley0@altervista.org","n/a",true,"2010"),
  createData("Zoonoodle","cterrill1@answers.com","Mining & Quarrying of Nonmetallic Minerals (No Fuels)",true,"1990"),
  createData("Mynte","orowson2@vimeo.com","Oil & Gas Production",false,"1986"),
  createData("Zoomcast","mmcilvaney3@cam.ac.uk","Computer Manufacturing",true,"2004"),
  createData("Zazio","ldosdill4@jimdo.com","n/a",false,"1993"),
  createData("Gabtune","nhelstrom5@github.io","n/a",true,"2001"),
  createData("Mydeo","dgiovannardi6@alexa.com","n/a",false,"2010"),
  createData("Wordware","gnewlyn7@godaddy.com","Real Estate Investment Trusts",true,"2005"),
  createData("Cogidoo","eaxcell8@cpanel.net","Computer Software: Prepackaged Software",false,"1957"),
  createData("Voolith","jattwill9@privacy.gov.au","Business Services",false,"2012"),
  createData("Skimia","dhassarda@w3.org","Biotechnology: Biological Products (No Diagnostic Substances)",false,"1997"),
  createData("Flashdog","lchrichtonb@mapquest.com","Medical/Nursing Services",true,"2013"),
  createData("Geba","jnettic@pcworld.com","Natural Gas Distribution",true,"1994"),
  createData("Plajo","bcornewalld@noaa.gov","Business Services",true,"1988"),
  createData("Jabbertype","gbeastalle@jimdo.com","Business Services",true,"1979"),
  createData("Pixope","nwallettf@loc.gov","n/a",true,"2012"),
  createData("Jabbersphere","mhairesnapeg@tumblr.com","Major Pharmaceuticals",true,"2011"),
  createData("Digitube","fbeeckh@myspace.com","n/a",true,"1993"),
  createData("Nlounge","rvittei@patch.com","Other Specialty Stores",false,"2011"),
  createData("Kanoodle","smackelworthj@ucla.edu","Property-Casualty Insurers",true,"1997"),
  createData("Abatz","dwimmerk@amazonaws.com","Major Pharmaceuticals",true,"2002"),
  createData("Tazz","kfeatenbyl@4shared.com","Major Banks",false,"1995"),
  createData("Dazzlesphere","wthomsenm@yellowpages.com","Major Banks",true,"1989"),
  createData("Meevee","wbauden@topsy.com","n/a",false,"2011"),
  createData("Topicstorm","egrento@hubpages.com","Medical/Dental Instruments",false,"2000"),
  createData("Wordtune","kdunningp@bloglines.com","Commercial Banks",true,"1998"),
  createData("Tagpad","heltunq@apache.org","n/a",true,"2010"),
  createData("Topicware","dwherrettr@buzzfeed.com","Industrial Machinery/Components",false,"2000"),
  createData("Demivee","dgreenslades@tuttocitta.it","Auto Parts:O.E.M.",true,"2001"),
  createData("Demivee","adrucet@buzzfeed.com","Natural Gas Distribution",false,"2002"),
  createData("Wikido","dsydallu@ox.ac.uk","n/a",true,"1993"),
  createData("Talane","cbreacherv@yale.edu","Major Pharmaceuticals",false,"2012"),
  createData("Chatterpoint","agopsellw@boston.com","Apparel",true,"1986"),
  createData("Blogpad","bluptonx@google.cn","n/a",false,"1993"),
  createData("Voolith","ycadley@chronoengine.com","Medical/Nursing Services",false,"1999"),
  createData("Dabtype","aogavinz@baidu.com","Investment Bankers/Brokers/Service",false,"2010"),
  createData("Meetz","dvondrasek10@booking.com","Agricultural Chemicals",false,"1985"),
  createData("Skipfire","carnoud11@sfgate.com","n/a",false,"2009"),
  createData("Flashset","btheobalds12@gmpg.org","Apparel",true,"1994"),
  createData("Feedspan","jlambot13@cdc.gov","Other Specialty Stores",true,"1993"),
  createData("Photobug","anichol14@arstechnica.com","Packaged Foods",false,"2005"),
  createData("Avavee","iscogings15@prlog.org","Publishing",true,"1998"),
  createData("Twimm","omarquand16@gov.uk","n/a",false,"2011"),
  createData("Quimba","tmcquirk17@aol.com","Telecommunications Equipment",true,"2006"),
  createData("Mydeo","kaucourte18@nydailynews.com","Investment Bankers/Brokers/Service",false,"2008"),
  createData("Flipopia","ciacobacci19@tripadvisor.com","Broadcasting",true,"2008"),
  createData("Ntag","rmumford1a@hexun.com","n/a",false,"2000"),
  createData("Browsedrive","arutt1b@miitbeian.gov.cn","n/a",false,"1962"),
  createData("Camido","faldgate1c@bing.com","Air Freight/Delivery Services",true,"2005"),
  createData("Aibox","cgaule1d@webs.com","n/a",true,"2006"),
  createData("Gigashots","bmatyukon1e@google.co.uk","Publishing",false,"2007"),
  createData("Centidel","bjobbins1f@example.com","n/a",true,"1997"),
  createData("Fadeo","lbeadel1g@google.nl","Auto Manufacturing",true,"2010"),
  createData("Flipbug","bmilburn1h@howstuffworks.com","n/a",true,"2010"),
  createData("Zooveo","jsizland1i@biglobe.ne.jp","Hotels/Resorts",true,"1985"),
  createData("Bluezoom","apetrasch1j@163.com","Computer Software: Prepackaged Software",true,"2009"),
  createData("Quimba","pgrouvel1k@barnesandnoble.com","n/a",true,"1999"),
  createData("Thoughtstorm","mbelleny1l@telegraph.co.uk","n/a",true,"1995"),
  createData("Riffpedia","kbushby1m@globo.com","Other Specialty Stores",true,"1962"),
  createData("Kamba","zsubhan1n@miibeian.gov.cn","Metal Fabrications",true,"2011"),
  createData("Linktype","amark1o@buzzfeed.com","n/a",false,"2010"),
  createData("Livepath","rrosenstock1p@etsy.com","Electric Utilities: Central",false,"2006"),
  createData("Tagopia","bdecort1q@globo.com","Air Freight/Delivery Services",true,"2004"),
  createData("Photobug","clucchi1r@booking.com","Real Estate Investment Trusts",true,"2012"),
  createData("Dablist","oroskeilly1s@dedecms.com","Natural Gas Distribution",false,"2012"),
  createData("Edgeify","jabramovic1t@accuweather.com","Packaged Foods",false,"1994"),
  createData("Topicware","gdonegan1u@sfgate.com","Electric Utilities: Central",true,"2005"),
  createData("Edgepulse","ngovan1v@cmu.edu","n/a",false,"2008"),
  createData("Trunyx","mquest1w@dailymail.co.uk","n/a",true,"1992"),
  createData("Meembee","mclimer1x@java.com","Major Pharmaceuticals",false,"2008"),
  createData("Plajo","mpughe1y@fda.gov","n/a",false,"2011"),
  createData("Tambee","sshreeve1z@yale.edu","Major Pharmaceuticals",false,"2006"),
  createData("Yakitri","kgatecliff20@surveymonkey.com","n/a",true,"2005"),
  createData("Kwinu","ncancelier21@ftc.gov","Package Goods/Cosmetics",true,"1988"),
  createData("Pixope","lfridlington22@shareasale.com","Water Supply",false,"2000"),
  createData("Twimbo","ggazzard23@ox.ac.uk","Real Estate Investment Trusts",true,"2009"),
  createData("Thoughtstorm","iemanuel24@goo.gl","Property-Casualty Insurers",true,"2006"),
  createData("Twinte","apinfold25@si.edu","Beverages (Production/Distribution)",false,"2012"),
  createData("Buzzshare","fgallie26@adobe.com","Semiconductors",false,"2000"),
  createData("Oba","mforrestall27@altervista.org","Medical/Nursing Services",false,"2010"),
  createData("Fivespan","tkain28@shareasale.com","Medical Specialities",false,"1991"),
  createData("Voolith","efaithorn29@blog.com","Oil & Gas Production",false,"1993"),
  createData("Roombo","oloy2a@economist.com","Real Estate Investment Trusts",false,"2009"),
  createData("Devpulse","aboater2b@odnoklassniki.ru","Computer Software: Prepackaged Software",true,"2005"),
  createData("Chatterbridge","vvinten2c@smugmug.com","n/a",true,"2002"),
  createData("Innotype","xblyth2d@google.co.uk","Metal Fabrications",false,"2002"),
  createData("Zoomlounge","ltitman2e@meetup.com","n/a",false,"1992"),
  createData("Shuffledrive","rbointon2f@google.cn","Oil & Gas Production",false,"2013"),
  createData("Yodo","mmacailine2g@nyu.edu","Banks",true,"2002"),
  createData("Meembee","ebraga2h@theatlantic.com","Television Services",true,"1998"),
  createData("Kamba","cchadwick2i@bloomberg.com","Meat/Poultry/Fish",true,"1993"),
  createData("Meemm","pbrisseau2j@163.com","Real Estate Investment Trusts",true,"2009"),
  createData("Eare","hcanizares2k@psu.edu","Major Pharmaceuticals",false,"2010"),
  createData("Zoonoodle","kbradberry2l@samsung.com","Biotechnology: Biological Products (No Diagnostic Substances)",false,"2009"),
  createData("Zoomcast","gwindeatt2m@cbsnews.com","Restaurants",false,"1993"),
  createData("Tagchat","ccattrall2n@homestead.com","Industrial Machinery/Components",true,"2006"),
  createData("Twitterlist","bbeckey2o@vinaora.com","Metal Fabrications",true,"2001"),
  createData("Trupe","lcollete2p@auda.org.au","Electronic Components",true,"1996"),
  createData("Oba","ytorrese2q@sina.com.cn","Computer Communications Equipment",true,"2004"),
  createData("Devpulse","drobertacci2r@newsvine.com","n/a",true,"1993")
];

const AdminPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate()

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onOpenCompanyDetails = (id: number) => {
    navigate(`/admin/${id}`)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => onOpenCompanyDetails(row?.id)} sx={{ cursor: 'pointer' }}>
                  {columns.map((column: any) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'status' ? row[column.id] ? <OutlinedCancel color='error' /> : <CheckOutlined color='success' /> : row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default AdminPage
