import React, { useEffect, useState } from 'react';
import { Col, Grid, Row, Spin, Typography } from 'antd';
import { fetchNFTs } from '../../requests';
import { filter, map } from 'lodash-es';

const { Title } = Typography;

function NFT() {
  const [nftList, setNftList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const nfts = await fetchNFTs();

    setNftList(nfts);
    setLoading(false);
  }, []);

  const onImageError = index => {
    setNftList(nftList => filter(nftList, (nft, i) => index !== i));
  };

  console.log(nftList);
  return (
    <div className="container">
      <Title className="header-title" level={1}>
        Earned NFTs
      </Title>
      {loading && <Spin size="large" />}

      {!nftList.length && !loading ? (
        <>You have not acquired any NFTs yet!</>
      ) : (
        <Row gutter={[16, 16]}>
          {map(nftList, (nft, index) => (
            <Col className="nft-container" key={`${nft[0]}${index}`} span={8}>
              <img src={nft[1]} onError={() => onImageError(index)} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default NFT;
