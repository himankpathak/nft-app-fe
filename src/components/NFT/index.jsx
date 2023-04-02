import React, { useEffect, useState } from 'react';
import { Col, Row, Spin, Typography } from 'antd';
import { filter, map } from 'lodash-es';

import { fetchNFTs } from '../../requests';
import rocket from '../../assets/rocket.gif';

const { Title } = Typography;

function NFT() {
  const [nftList, setNftList] = useState([]);
  const [loading, setLoading] = useState(false);

  const message = sessionStorage.getItem('email')
    ? 'You have not acquired any NFTs yet!'
    : 'You are not logged in! Please login to view your minted NFTs.';

  useEffect(async () => {
    setLoading(true);
    const nfts = await fetchNFTs();

    setNftList(nfts);
    setLoading(false);
  }, []);

  const onImageError = index => {
    setNftList(nftList => filter(nftList, (nft, i) => index !== i));
  };

  return (
    <div className="container">
      <Title className="header-title" level={1}>
        Earned NFTs
      </Title>
      {loading && <Spin size="large" />}

      {!nftList.length && !loading ? (
        <>
          {message}
          <img className="rocket-image" src={rocket} />
        </>
      ) : (
        <Row gutter={[16, 16]}>
          {map(nftList, (nft, index) => (
            <Col
              className="nft-container"
              key={`${nft[0]}${index}`}
              span={nftList.length > 2 ? 8 : 12}
            >
              <img src={nft[1]} onError={() => onImageError(index)} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default NFT;
