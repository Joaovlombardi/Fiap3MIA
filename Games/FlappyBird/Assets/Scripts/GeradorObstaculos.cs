using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GeradorObstaculos : MonoBehaviour
{


    // Como criar os obstaculos?
    // Onde criar? Na posi��o do gerador 
    // Quando criar? Tempo

    [SerializeField]
    private float tempoParaGerar;
    private float cronometroDoJogo;
    private float cronometro;

    [SerializeField]
    private GameObject modeloObstaculo;

    private void Awake()
    {
        this.cronometro = this.tempoParaGerar;
        
  
    }

    void Update()
    {
        this.cronometro -= Time.deltaTime;  
        if(this.cronometro < 0)
        {
            GameObject.Instantiate(this.modeloObstaculo, this.transform.position, Quaternion.identity);
           this.cronometro = this.tempoParaGerar;
        }
    }
}
