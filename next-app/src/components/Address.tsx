import type { Web3ReactHooks } from '@web3-react/core';

export default function Address({
  accounts,
  ENSNames,
}: {
  accounts: ReturnType<Web3ReactHooks['useAccounts']>;
  ENSNames: ReturnType<Web3ReactHooks['useENSNames']>;
}) {
  if (accounts === undefined) return null;

  return (
    <div>
      Accounts:{' '}
      <b>
        {accounts.length === 0
          ? 'None'
          : accounts?.map((account, i) => (
              <ul
                key={account}
                style={{
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {ENSNames?.[i] ?? account}
              </ul>
            ))}
      </b>
    </div>
  );
}
